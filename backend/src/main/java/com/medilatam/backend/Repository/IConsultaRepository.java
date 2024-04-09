package com.medilatam.backend.Repository;

import com.medilatam.backend.Entity.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IConsultaRepository extends JpaRepository<Consulta,Long> {

}
