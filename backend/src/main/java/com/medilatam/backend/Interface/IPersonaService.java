package com.medilatam.backend.Interface;

import com.medilatam.backend.Entity.PersonaEntity;
import java.util.List;

public interface IPersonaService {

    //Lista los usuarios
    List<PersonaEntity> listarPersonas();

    //Muestra un usuario según el ID
    PersonaEntity personaPorId(Long id);

    //Almacena un nuevo usuario
    void guardarPersona(PersonaEntity personaEntity);

    //Edita un usuario basandose en su ID
    void actualizarPersonaPorId(Long id, PersonaEntity personaDetails);

    //Elimina un usuario buscandolo por su ID
    void eliminarPersonaPorId(Long id);

}
