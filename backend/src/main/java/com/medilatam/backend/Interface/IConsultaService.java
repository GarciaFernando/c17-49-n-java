package com.medilatam.backend.Interface;

import com.medilatam.backend.Entity.Consulta;

import java.util.List;

public interface IConsultaService {
    void save(Consulta consulta);
    List<Consulta> getAll();
    Consulta findConsulta(Long id);
    void deleteConsulta(Long id);
    void edit(Consulta consulta);

}
