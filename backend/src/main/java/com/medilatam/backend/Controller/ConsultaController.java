package com.medilatam.backend.Controller;


import com.medilatam.backend.Entity.Consulta;
import com.medilatam.backend.Entity.Doctor;
import com.medilatam.backend.Entity.EstadoConsulta;
import com.medilatam.backend.Entity.PersonaEntity;
import com.medilatam.backend.Entity.TipoConsulta;
import com.medilatam.backend.Interface.IConsultaService;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consulta")
public class ConsultaController {

    @Autowired
    IConsultaService iConsultaService;
    
    //Expone las consultas creadas
    @GetMapping("/showConsulta")
    public List<Consulta> getConsulta(){
        return iConsultaService.getConsulta();
    }
    
    
    //Crea una consulta
    @PostMapping("/createConsulta")
    public ResponseEntity<?> createConsulta(@RequestBody Consulta consulta){
        iConsultaService.saveConsulta(consulta);
        return ResponseEntity.status(HttpStatus.OK).body("Success");
    }
    
    //Borra una consulta siguiendo su ID
    @DeleteMapping("/deleteConsulta/{id}")
    public ResponseEntity<?> deleteConsulta(@PathVariable Long id){
        iConsultaService.deleteConsulta(id);
        return ResponseEntity.status(HttpStatus.OK).body("Consulta Eliminada con exito");
    }
    
    
    //Edita una consulta
    @PutMapping("/editConsulta")
    public ResponseEntity<?> editConsulta(@PathVariable Long id,
                                                                   @RequestParam("doctor") Doctor nuevoDoctor,
                                                                   @RequestParam("paciente") PersonaEntity nuevoPaciente,
                                                                   @RequestParam("especialidad") String nuevaEspecialidad,
                                                                   @RequestParam("precio") Float nuevoPrecio,
                                                                   @RequestParam("fecha") Date nuevaFecha,
                                                                   @RequestParam("descripcion") String nuevaDescripcion,
                                                                   @RequestParam("estado de consulta") EstadoConsulta nuevoEstadoDeConsulta,
                                                                   @RequestParam("Tipo de consulta") TipoConsulta nuevoTipoDeConsulta,
                                                                   @RequestParam("calificacion") Float nuevaCalificacion){
        
        //Busca la consulta según la ID dada para guardarla dentro de la variable consulta
        Consulta consulta = iConsultaService.findConsulta(id);
        
        //Aplica los cambios a la consulta guardada dentro de la variable
        consulta.setDoctor(nuevoDoctor);
        consulta.setPaciente(nuevoPaciente);
        consulta.setEspecialidad(nuevaEspecialidad);
        consulta.setPrecio(nuevoPrecio);
        consulta.setFecha(nuevaFecha);
        consulta.setDescripcion(nuevaDescripcion);
        consulta.setEstado(nuevoEstadoDeConsulta);
        consulta.setTipo(nuevoTipoDeConsulta);
        consulta.setCalificacion(nuevaCalificacion);
        
        //Guarda todos los cambios realizados a dicha consulta
        iConsultaService.saveConsulta(consulta);
        
        //Retorna un status positivo si se realizó correctamente
        return ResponseEntity.status(HttpStatus.OK).body("Se modifico la consulta con éxito");
    }


}
