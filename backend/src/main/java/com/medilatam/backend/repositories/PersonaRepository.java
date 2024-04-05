package com.medilatam.backend.repositories;

import com.medilatam.backend.entities.PersonaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends
        JpaRepository<PersonaEntity, Long>,
        JpaSpecificationExecutor<PersonaEntity> {
}
