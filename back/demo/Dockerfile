# Stage 1: Build the JAR file
FROM gradle:7.4.1-jdk17 AS builder

WORKDIR /app

COPY build.gradle settings.gradle /app/
COPY gradle /app/gradle

# 소스 코드 복사
COPY src /app/src

RUN gradle clean build -x test --no-daemon

# Stage 2: Build the runtime image
FROM openjdk:17-ea-jdk-slim

WORKDIR /app

COPY --from=builder /app/build/libs/hairpin-application.jar /app/hairpin-application.jar

ENV DB_URL=${DB_URL}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV AUTH_API_URL=${AUTH_API_URL}

EXPOSE 8080

CMD ["java", "-jar", "hairpin-application.jar", "--spring.profiles.active=aws"]