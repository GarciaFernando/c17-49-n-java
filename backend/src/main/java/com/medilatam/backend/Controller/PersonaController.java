package com.medilatam.backend.Controller;

import com.medilatam.backend.Entity.PersonaEntity;
import com.medilatam.backend.Interface.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonaController {
    @Autowired
    IPersonaService iPersonaService;

    //Listado de usuarios
    @GetMapping("personas")
    public List<PersonaEntity> getPersonas(){
        return iPersonaService.listarPersonas();
    }

    //Devuelve los datos de un usuario seleccionado por su ID
    @GetMapping("persona/{id}")
    public PersonaEntity getPersonaById(@PathVariable(name = "id") Long id){
        return iPersonaService.personaPorId(id);
    }

    //Crea un usuario
    @PostMapping("persona/create")
    public ResponseEntity<?> createPersona(@RequestBody PersonaEntity personaEntity){
        iPersonaService.guardarPersona(personaEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body("El nuevo registro ha sido creado");
    }

    //Edita un usuario según su ID
    @PutMapping("persona/update/{id}")
    public ResponseEntity<?> updatePersonaById(@PathVariable(name = "id") Long id, @RequestBody PersonaEntity personaDetails) {   
        iPersonaService.actualizarPersonaPorId(id, personaDetails);
        return ResponseEntity.status(HttpStatus.OK).body("El registro ha sido actualizado con éxito.");
    }
    //Borra un usuario según su ID
    @DeleteMapping("persona/delete/{id}")
    public ResponseEntity<?> deletePersonaById(@PathVariable(name = "id") Long id) {   
        iPersonaService.eliminarPersonaPorId(id);
        return ResponseEntity.status(HttpStatus.OK).body("El registro ha sido eliminado con éxito.");
    }

}
