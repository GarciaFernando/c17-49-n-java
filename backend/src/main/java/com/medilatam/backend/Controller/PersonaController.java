package com.medilatam.backend.Controller;

import com.medilatam.backend.Dto.PersonaDto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/persona")

public class PersonaController {
    public List<PersonaDto> getAllPersonas(){
        return null;
    }
}

