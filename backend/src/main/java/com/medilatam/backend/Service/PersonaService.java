package com.medilatam.backend.Service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.medilatam.backend.Entity.PersonaEntity;
import com.medilatam.backend.Interface.IPersonaService;
import com.medilatam.backend.Repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements IPersonaService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

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
        personaEntity.setPassword(passwordEncoder.encode(personaEntity.getPassword()));
        personaRepository.save(personaEntity);
    }

    @Override
    public void actualizarPersonaPorId(Long id, PersonaEntity personaDetails) {

        PersonaEntity personaEntity = personaRepository.findById(id).orElse(null);

        personaEntity.setName(personaDetails.getName());
        personaEntity.setEmail(personaDetails.getEmail());
        personaEntity.setPassword(passwordEncoder.encode(personaEntity.getPassword()));
        personaEntity.setFoto(personaDetails.getFoto());

        personaRepository.save(personaEntity);
    }

    @Override
    public void eliminarPersonaPorId(Long id) {
        personaRepository.deleteById(id);
    }

}
