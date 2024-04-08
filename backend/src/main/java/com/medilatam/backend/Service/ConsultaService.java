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


    @Override
    public void save(Consulta consulta) {
        iConsultaRepository.save(consulta);
    }

    @Override
    public List<Consulta> getAll() {
        return iConsultaRepository.findAll();
    }

    @Override
    public Consulta findConsulta(Long id) {
        return iConsultaRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteConsulta(Long id) {
        iConsultaRepository.deleteById(id);
    }

    @Override
    public void edit(Consulta consulta){
        iConsultaRepository.save(consulta); //El metodo .save si el ID!=0 actualiza los datos
    }
}
