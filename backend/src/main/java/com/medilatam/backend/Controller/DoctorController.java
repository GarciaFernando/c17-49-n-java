package com.medilatam.backend.Controller;

import com.medilatam.backend.Entity.Doctor;
import com.medilatam.backend.Interface.IConsultaService;
import com.medilatam.backend.Interface.IDoctorService;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Franklynjsb
 */
@RestController
@RequiredArgsConstructor
public class DoctorController {
    
    @Autowired IDoctorService idoctorservice;
    private IConsultaService iConsultaService;

    
    //Obtener Doctores
    @GetMapping("doctor/show")
    public List<Doctor> getDoctor(){
        return idoctorservice.getDoctor();
    }
    
    //Insertar Doctores en la lista
    @PostMapping("doctor/create")
    public String createDoctor(@RequestBody Doctor doctor) {
        idoctorservice.saveDoctor(doctor);
        return "Success";
    }
    
    //Borrar Doctores
    @DeleteMapping("doctor/delete/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        idoctorservice.deleteDoctor(id);
        return "Success";
    }
    
    //Editar los Doctores
    @PutMapping("/doctor/edit/{id}")
    public Doctor editDoctor (@PathVariable Long id,
                                            @RequestParam("nombre") String nuevoNombre,
                                            @RequestParam("especialidad") String nuevoEspecialidad,
                                            @RequestParam("horarioAtencion") String nuevoHorarioAtencion,
                                            @RequestParam("localidad") String nuevoLocalidad,
                                            @RequestParam("costoConsulta") Integer nuevoCostoConsulta) {
     Doctor doctor =    idoctorservice.findDoctor(id);
     
     doctor.setNombre(nuevoNombre);
     doctor.setEspecialidad(nuevoEspecialidad);
     doctor.setHorarioAtencion(nuevoHorarioAtencion);
     doctor.setLocalidad(nuevoLocalidad);
     doctor.setCostoConsulta(nuevoCostoConsulta);
     
     idoctorservice.saveDoctor(doctor);
     
     return doctor;
    }
    
}
