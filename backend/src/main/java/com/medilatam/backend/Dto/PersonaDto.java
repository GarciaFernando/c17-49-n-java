package com.medilatam.backend.Dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Null;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonaDto {

    private Long id;

    @NotBlank(message = "Este campo es obligatorio")
    private String name;

    @NotBlank(message = "Este campo es obligatorio")
    private String email;

    @NotBlank(message = "Este campo es obligatorio")
    private String password;

    @Null(message = "Este campo debe ser nulo al principio")
    private String foto;

}
