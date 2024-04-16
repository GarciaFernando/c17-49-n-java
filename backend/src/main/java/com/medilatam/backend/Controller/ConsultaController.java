package com.medilatam.backend.Controller;


import com.medilatam.backend.Dto.ConsultaRequest;
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
    public ResponseEntity<?> createConsulta(@RequestBody ConsultaRequest consulta){
        return iConsultaService.saveConsulta(consulta);
    }
    
    //Borra una consulta siguiendo su ID
    @DeleteMapping("/deleteConsulta/{id}")
    public ResponseEntity<?> deleteConsulta(@PathVariable Long id){
        return iConsultaService.deleteConsulta(id);
    }
    
    
    //Edita una consulta
    @PutMapping("/editConsulta")
    public ResponseEntity<?> editConsulta(@RequestParam(name = "id")  Long id,
                                                                @RequestParam(name="descripcion") String nuevaDescripcion,
                                                                @RequestParam(name = "estado") Integer nuevoEstadoDeConsulta,
                                                                @RequestParam(name = "fecha") String nuevaFecha){
        
        //Retorna un status positivo si se realizó correctamente
        return iConsultaService.editConsulta(id, nuevaDescripcion, nuevoEstadoDeConsulta, nuevaFecha);
    }


}
