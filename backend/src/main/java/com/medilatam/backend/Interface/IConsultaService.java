package com.medilatam.backend.Interface;

import com.medilatam.backend.Dto.ConsultaRequest;
import com.medilatam.backend.Entity.Consulta;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IConsultaService {
    
    //Expone la lista de Consultas
    List<Consulta> getConsulta();
    
    //Guarda una consulta
    ResponseEntity<?> saveConsulta(ConsultaRequest consulta);
    
    //Eliminar una consulta por ID
    ResponseEntity<?> deleteConsulta(Long id);
    
    //Buscar una consulta por ID
    ResponseEntity<?> findConsulta(Long id);

    ResponseEntity<?> getConsultasNoAtendidas();


    ResponseEntity<?> editConsulta(Long id, String nuevaDescripcion, Integer nuevoEstadoDeConsulta, String nuevaFecha);
}
