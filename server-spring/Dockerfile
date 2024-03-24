FROM openjdk:17 AS builder

COPY . .
RUN ["./gradlew","assemble"]

FROM openjdk:17
COPY build/libs/core-0.0.1-SNAPSHOT.jar app.jar
CMD ["java", "-jar", "core-0.0.1-SNAPSHOT.jar"]
