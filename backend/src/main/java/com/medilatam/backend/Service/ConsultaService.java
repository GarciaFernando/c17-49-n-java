package com.medilatam.backend.Service;


import com.medilatam.backend.Entity.Consulta;
import com.medilatam.backend.Interface.IConsultaService;
import com.medilatam.backend.Repository.IConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaService implements IConsultaService {
    @Autowired
    IConsultaRepository iConsultaRepository;
    
    //Obtiene una lista de las consultas
    @Override
    public List<Consulta> getConsulta() {
        
        //Crea una lista según las consultas que se hayan guardado
        List<Consulta> consulta = iConsultaRepository.findAll();
        
        //Devuelve la variable que posee la lista guardada
        return consulta;
    }

    //Guarda la consulta dentro del repositorio de consultas
    @Override
    public void saveConsulta(Consulta consulta) {
        
        //Guarda la consulta dentro del repositorio de consultas
        iConsultaRepository.save(consulta);
    }

    
    //Según el ID dado se busca dicha consulta para eliminarla
    @Override
    public void deleteConsulta(Long id) {
        
        //Se elimina una consulta en particular del repositorio designada por su ID
        iConsultaRepository.deleteById(id);
        
    }

    
    //Busca una consulta según un ID dado
    @Override
    public Consulta findConsulta(Long id) {
        
        //Se busca una consulta por su ID para guardarla dentro de la variable y si no la encuentra expone un null
        Consulta consulta = iConsultaRepository.findById(id).orElse(null);
        
        //Se expone la variable que posee la consulta buscada
        return consulta;
    }

}
