package net.javaguides.springboot.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**") // Apply CORS settings to all paths
            .allowedOrigins("http://localhost:4200") // Allow requests from angular app
            .allowedMethods("*") // Allow all methods
            .allowedHeaders("*") // Allow all headers
            .allowCredentials(true); // Allow credentials
    }
}
