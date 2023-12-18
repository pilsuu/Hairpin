package hairpin.demo.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecuritySchemes;
import io.swagger.v3.oas.models.security.SecurityScheme;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(info = @Info(title = "Hairpin API", description = "비즈니스 로직 담당하는 API", version = "${api.version}"))
@io.swagger.v3.oas.annotations.security.SecurityScheme(name = "Authentication", type = SecuritySchemeType.HTTP, bearerFormat = "JWT", scheme = "bearer")
public class SwaggerConfig {
//    @Bean
//    public GroupedOpenApi math() {
//        return GroupedOpenApi.builder()
//                .group("match")
//                .pathsToMatch("/match/**")
//                // .packagesToScan("com.example.swagger") // package 필터 설정
//                .build();
//    }
//
//    @Bean
//    public GroupedOpenApi book() {
//        return GroupedOpenApi.builder()
//                .group("book")
//                .pathsToMatch("/book/**")
//                .build();
//    }
}
