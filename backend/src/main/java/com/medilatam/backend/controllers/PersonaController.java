package com.medilatam.backend.controllers;
import com.medilatam.backend.contracts.PersonaDto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/persona")
public class PersonaController {

    public List <PersonaDto> getAllPersonas(){
        return null;
    }
}
