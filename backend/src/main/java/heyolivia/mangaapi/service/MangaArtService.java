package heyolivia.mangaapi.service;

import heyolivia.mangaapi.client.StabilityAIClient;
import heyolivia.mangaapi.dto.TextToImageRequest;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import javax.imageio.ImageIO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.mock.web.MockMultipartFile;

@Service
public class MangaArtService {
    //"style_preset: must be one of
    //analog-film, anime, cinematic, comic-book, digital-art, enhance, fantasy-art,
    //isometric, line-art, low-poly, modeling-compound, neon-punk, origami,
    //photographic, pixel-art, 3d-model, tile-texture."

    private final StabilityAIClient stabilityAIClient;
    private final String apiKey;

    public MangaArtService(StabilityAIClient stabilityAIClient, @Value("${stability.api.key}") String apiKey) {
        this.stabilityAIClient = stabilityAIClient;
        this.apiKey = apiKey;
    }

    public byte[] createMangaArt(MultipartFile image, String prompt) {
        try {
            // Step 1: Validate input image
            if (image == null || image.isEmpty()) {
                throw new IllegalArgumentException("No image file uploaded.");
            }

            // Step 2: Read and analyze original image
            BufferedImage original = ImageIO.read(image.getInputStream());
            if (original == null) {
                throw new IllegalArgumentException("Invalid image content.");
            }

            int width = original.getWidth();
            int height = original.getHeight();
            System.out.println("🖼 Original image size: " + width + "x" + height);

            int[][] allowedSizes = {
                {1024, 1024}, {1152, 896}, {1216, 832},
                {1344, 768}, {1536, 640}, {640, 1536},
                {768, 1344}, {832, 1216}, {896, 1152}
            };

            int targetW = 1024, targetH = 1024;
            double aspect = (double) width / height;
            double bestDiff = Double.MAX_VALUE;

            // Step 3: Find optimal SDXL dimensions based on aspect ratio
            for (int[] size : allowedSizes) {
                double ratio = (double) size[0] / size[1];
                double diff = Math.abs(ratio - aspect);
                if (diff < bestDiff) {
                    bestDiff = diff;
                    targetW = size[0];
                    targetH = size[1];
                }
            }

            System.out.println("📏 Resizing image to closest allowed SDXL size: "
                + targetW + "x" + targetH);

            // Step 4: Resize image with high-quality interpolation
            BufferedImage resized = new BufferedImage(targetW, targetH, BufferedImage.TYPE_INT_RGB);
            Graphics2D g2d = resized.createGraphics();
            g2d.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
            g2d.drawImage(original, 0, 0, targetW, targetH, null);
            g2d.dispose();

            // Step 5: Convert to temporary file for multipart upload
            File tempFile = File.createTempFile("resized_", ".png");
            ImageIO.write(resized, "png", tempFile);

            image = new MockMultipartFile(
                tempFile.getName(),
                tempFile.getName(),
                "image/png",
                new FileInputStream(tempFile)
            );

            String finalPrompt = prompt + ", in colorful Japanese manga style, cel-shaded, "
                + "vivid colors, expressive characters, dynamic motion, cinematic lighting, "
                + "detailed backgrounds, drawn by manga artist, vibrant shonen art aesthetic.";


            String engineId = "stable-diffusion-xl-1024-v1-0";
//            String engineId = "stable-diffusion-v1-5";

            String stylePreset = "anime";

//            TextToImageRequest request = new TextToImageRequest(finalPrompt, stylePreset);
//            request.setWidth(1024);
//            request.setHeight(1024);


            return stabilityAIClient.generateImageFromImage(
                "Bearer " + apiKey,
                engineId,
                image,
                finalPrompt,
                stylePreset
            );

        } catch (IllegalArgumentException e) {
            throw new RuntimeException("⚠️ " + e.getMessage(), e);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to process image for Manga Art generation.", e);
        }

    }

    public byte[] createMangaArtFromText(String prompt, String style) {

        String finalPrompt = prompt +
            ", in colorful Japanese manga style, cel-shaded, vivid colors, expressive faces, " +
            "dynamic motion lines, hand-drawn textures, clean line art, detailed backgrounds, " +
            "drawn by manga artist, vibrant shonen art aesthetic.";

        String engineId = "stable-diffusion-xl-1024-v1-0"; // best for cyberpunk XL detail

        String stylePreset;
        if (style.equalsIgnoreCase("anime") ||
            style.equalsIgnoreCase("digital-art") ||
            style.equalsIgnoreCase("comic-book")) {
            stylePreset = style.toLowerCase();
        } else {
            stylePreset = "anime";
        }

        String negativePrompt = "blurry, lowres, deformed, ugly face, bad anatomy, extra limbs, " +
            "overexposed, watermark, text, distorted, duplicate, low quality";

        // Create request payload with optimized parameters
        TextToImageRequest requestPayload = new TextToImageRequest(finalPrompt, stylePreset, negativePrompt);

        return stabilityAIClient.generateImageFromText(
            "Bearer " + apiKey,
            engineId,
            requestPayload
        );
    }
}
