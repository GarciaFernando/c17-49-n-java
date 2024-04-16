package com.medilatam.backend.Interface;

import com.medilatam.backend.Entity.PersonaEntity;

import java.util.List;

public interface IPersonaService {
    List<PersonaEntity> listarPersonas();

    PersonaEntity personaPorId(Long id);

    void guardarPersona(PersonaEntity personaEntity);
}
