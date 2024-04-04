package com.medilatam.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Franklynjsb
 */

@Entity
@Getter @Setter
public class Doctor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @NotNull
    @Size(min = 1, max = 70, message = "Faltan o sobran caracteres")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 70, message = "Faltan o sobran caracteres")
    private String especialidad;
    
    @NotNull
    @Size(min = 1, max = 70, message = "Faltan o sobran caracteres")
    private String horarioAtencion;
    
    @NotNull
    @Size(min = 1, max = 70, message = "Faltan o sobran caracteres")
    private String localidad;
    
    @NotNull
    private Integer costoConsulta;

    
    //Constructors
    public Doctor() {
    }
    
    public Doctor(String nombre, String especialidad, String horarioAtencion, String localidad, Integer costoConsulta) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.horarioAtencion = horarioAtencion;
        this.localidad = localidad;
        this.costoConsulta = costoConsulta;
    }
    
    
}
