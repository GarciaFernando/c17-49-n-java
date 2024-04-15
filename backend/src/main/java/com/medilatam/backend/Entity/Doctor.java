package com.medilatam.backend.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

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

    @OneToMany(mappedBy = "doctor", cascade=CascadeType.ALL)
    private List<Consulta> consultas;

    
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
