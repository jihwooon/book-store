package jpa.core.health.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class HealthCheckResponseDto {

    private boolean status;
    private String health;
}
