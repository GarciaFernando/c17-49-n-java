package com.medilatam.backend.Interface;

import com.medilatam.backend.Entity.Consulta;

import java.util.List;

public interface IConsultaService {
    
    //Expone la lista de Consultas
    public List<Consulta> getConsulta();
    
    //Guarda una consulta
    public void saveConsulta(Consulta consulta);
    
    //Eliminar una consulta por ID
    public void deleteConsulta(Long id);
    
    //Buscar una consulta por ID
    public Consulta findConsulta(Long id);
    
    

}
