package heyolivia.mangaapi.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import heyolivia.mangaapi.dto.TextGenerationRequestDTO;
import heyolivia.mangaapi.service.MangaArtService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {
    "http://localhost:5173",  // Vite default dev server
    "http://127.0.0.1:5173",
})
@RequiredArgsConstructor
public class GenerationController {

    private final MangaArtService mangaArtService;

    /**
     * Generates manga-style artwork from an uploaded image and text prompt.
     *
     * <p>This endpoint accepts an image file and a text prompt, then transforms
     * the image into manga-style artwork using AI image-to-image generation.
     * The prompt guides the style and characteristics of the transformation.</p>
     *
     * <p><strong>Example request:</strong></p>
     * <pre>
     * POST /api/v1/generate
     * Content-Type: multipart/form-data
     *
     * image: [binary image file]
     * prompt: "Transform this into a black and white manga panel with dramatic shading"
     * </pre>
     *
     * <p><strong>Supported image formats:</strong> PNG, JPEG, WEBP</p>
     * <p><strong>Maximum file size:</strong> Depends on Spring Boot's multipart configuration
     * (default: 1MB, configurable via {@code spring.servlet.multipart.max-file-size})</p>
     *
     * @param image the input image file to be transformed into manga style
     * @param prompt the text description guiding the manga art transformation
     * @return {@link ResponseEntity} containing the generated manga artwork as PNG bytes
     *         with HTTP 200 OK status on success, or HTTP 500 Internal Server Error on failure
     *
     * @throws IllegalArgumentException if the image file is empty or invalid
     * @throws RuntimeException if the image generation service fails
     *
     * @apiNote The response content type is always {@code image/png}
     */
    @PostMapping(value = "/generate", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generateMangaArt(@RequestParam("image")MultipartFile image,
        @RequestParam("prompt") String prompt) {
        try {
            byte[] imageBytes = mangaArtService.createMangaArt(image, prompt);
            return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }


    /**
     * Generates manga-style artwork from a text description only.
     *
     * <p>This endpoint creates original manga artwork directly from a text prompt
     * without requiring an input image. It uses text-to-image AI generation to
     * produce artwork in the specified manga style.</p>
     *
     * <p><strong>Example request:</strong></p>
     * <pre>
     * POST /api/v1/generate-from-text
     * Content-Type: application/json
     *
     * {
     *   "prompt": "A heroic character standing on a cliff at sunset",
     *   "style": "shonen"
     * }
     * </pre>
     *
     * <p><strong>Available styles:</strong></p>
     * <ul>
     *   <li>{@code shonen} - Action-oriented manga style (e.g., Naruto, One Piece)</li>
     *   <li>{@code shojo} - Romance-oriented manga style with delicate features</li>
     *   <li>{@code seinen} - Mature, realistic manga style</li>
     *   <li>{@code anime} - Colorful anime-inspired style</li>
     * </ul>
     *
     * @param requestDTO the request body containing the text prompt and style preference
     * @return {@link ResponseEntity} containing the generated manga artwork as PNG bytes
     *         with HTTP 200 OK status on success, or HTTP 500 Internal Server Error on failure
     *
     * @throws IllegalArgumentException if the prompt is empty or the style is invalid
     * @throws RuntimeException if the image generation service fails
     *
     * @apiNote The response content type is always {@code image/png}
     * @see TextGenerationRequestDTO
     */
    @PostMapping(value = "/generate-from-text", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generateMangaArtFromText(@RequestBody TextGenerationRequestDTO requestDTO) {
        try {
            byte[] imageBytes = mangaArtService.createMangaArtFromText(requestDTO.getPrompt(), requestDTO.getStyle());
            return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageBytes);
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
}
