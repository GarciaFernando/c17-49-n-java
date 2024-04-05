package com.medilatam.backend.Service;

import com.medilatam.backend.repositories.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PersonaService {
    @Autowired
    private PersonaRepository repository;
}
