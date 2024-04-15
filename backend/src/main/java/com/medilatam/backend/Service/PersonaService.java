package com.medilatam.backend.Service;

import com.medilatam.backend.Entity.PersonaEntity;
import com.medilatam.backend.Interface.IPersonaService;
import com.medilatam.backend.Repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PersonaService implements IPersonaService {
    @Autowired
    private PersonaRepository personaRepository;

    @Override
    public List<PersonaEntity> listarPersonas() {
        List<PersonaEntity> personaEntities = personaRepository.findAll();
        return personaEntities;
    }

    @Override
    public PersonaEntity personaPorId(Long id) {
        PersonaEntity personaEntity = personaRepository.findById(id).orElse(null);
        return personaEntity;
    }

    @Override
    public void guardarPersona(PersonaEntity personaEntity) {
        personaRepository.save(personaEntity);
    }


}
