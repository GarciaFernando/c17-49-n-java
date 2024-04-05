package com.medilatam.backend.contracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PersonaDto {
    private String name;
    private String email;
    private String password;
}
