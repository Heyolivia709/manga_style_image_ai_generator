package heyolivia.mangaapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MangaapiApplication {

    public static void main(String[] args) {
//        System.out.println("STABILITY_API_KEY = " + System.getenv("STABILITY_API_KEY"));
        SpringApplication.run(MangaapiApplication.class, args);
    }

}