package com.medilatam.backend.Controller;


import com.medilatam.backend.Entity.Consulta;
import com.medilatam.backend.Interface.IConsultaService;
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

    @GetMapping("/show")
    public List<Consulta> getConsulta(){
        return iConsultaService.getAll();
    }

    @PostMapping("/create")
    public ResponseEntity<?> createConsulta(@RequestBody Consulta consulta){
        iConsultaService.save(consulta);
        return ResponseEntity.status(HttpStatus.OK).body("Success");
    }

    @PutMapping("/edit")
    public ResponseEntity<?> editConsulta(@RequestBody Consulta consulta){
        iConsultaService.edit(consulta);
        return ResponseEntity.status(HttpStatus.OK).body("Se modifico la consulta con éxito");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteConsulta(@PathVariable Long id){
        iConsultaService.deleteConsulta(id);
        return ResponseEntity.status(HttpStatus.OK).body("Consulta Eliminada con exito");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consulta> findConsulta(@PathVariable Long id){
        return ResponseEntity.ok(iConsultaService.findConsulta(id));

    }

}
