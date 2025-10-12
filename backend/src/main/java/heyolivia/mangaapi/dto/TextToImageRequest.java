package heyolivia.mangaapi.dto;

import java.util.List;

// Data Transfer Object for Stability AI text-to-image generation requests
public class TextToImageRequest {

    // Classifier Free Guidance (CFG) scale determines how strictly the diffusion process
    // adheres to the prompt text
    private List<TextPrompt> text_prompts;
    private double cfg_scale = 7;
    private int height = 1024;
    private int width = 1024;
    private int samples = 1; // Number of images to generate in a single request
    private int steps = 30; // Number of diffusion steps to perform during generation
    private String style_preset;


    //Inner class for the text_prompts
    public static class TextPrompt {
        private String text;
        private double weight;

        public TextPrompt(String text, double weight) {
            this.text = text;
            this.weight = weight;
        }
        public String getText() {
            return text;
        }
        public void setText(String text) {
            this.text = text;
        }
    }

    // Constructs a text-to-image request with positive and negative prompts
    public TextToImageRequest(String text, String style, String negativePrompt) {
        this.text_prompts = List.of(
            new TextPrompt(text, 1.0),
            new TextPrompt(negativePrompt, -1.0)
        );
        this.style_preset = style;
    }

    public List<TextPrompt> getText_prompts() {
        return text_prompts;
    }

    public double getCfg_scale() {
        return cfg_scale;
    }

    public int getHeight() {
        return height;
    }

//    public void setHeight(int height) {
//        this.height = height;
//    }
//
//    public void setWidth(int width) {
//        this.width = width;
//    }

    public int getWidth() {
        return width;
    }

    public int getSamples() {
        return samples;
    }

    public String getStyle_preset() {
        return style_preset;
    }

    public int getSteps() {
        return steps;
    }
}
