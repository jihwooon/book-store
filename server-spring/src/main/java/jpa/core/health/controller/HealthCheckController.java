package jpa.core.health.controller;

import jpa.core.health.dto.HealthCheckResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/health")
@RestController
public class HealthCheckController {

    @GetMapping("/check")
    @ResponseStatus(HttpStatus.OK)
    public HealthCheckResponseDto checkHealth() {
        HealthCheckResponseDto healthCheckResponseDto = HealthCheckResponseDto.builder()
            .status(true)
            .health("OK")
            .build();

        return healthCheckResponseDto;
    }
}
