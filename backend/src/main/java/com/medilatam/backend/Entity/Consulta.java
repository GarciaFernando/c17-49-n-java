package com.medilatam.backend.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Table(name = "consulta")
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="personaEntity_id", nullable = false)
    private PersonaEntity personaEntity;

    @NotNull
    @Size(min=1, max=30, message="Número de caracteres incorrectos")
    private String especialidad;

    @NotNull
    private Float precio;

    @NotNull
    private Date fecha;

    @NotNull
    @Size(min=1,max=500, message="Número de caracteres incorrectos")
    private String descripcion;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EstadoConsulta estado;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TipoConsulta tipo;

    private Float calificacion;


}
