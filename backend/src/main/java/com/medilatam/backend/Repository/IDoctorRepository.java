package com.medilatam.backend.Repository;

import com.medilatam.backend.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Franklynjsb
 */
@Repository
public interface IDoctorRepository extends JpaRepository<Doctor, Integer> {
}
