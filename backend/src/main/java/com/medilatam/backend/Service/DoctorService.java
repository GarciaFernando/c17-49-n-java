package com.medilatam.backend.Service;

import com.medilatam.backend.Entity.Doctor;
import com.medilatam.backend.Interface.IDoctorService;
import com.medilatam.backend.Repository.IDoctorRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Franklynjsb
 */
@Service
public class DoctorService implements IDoctorService {
    
    @Autowired IDoctorRepository idoctorrepository;
    
    @Override
    public List<Doctor> getDoctor() {
        List<Doctor> doctor = idoctorrepository.findAll();
        return doctor;
    }

    @Override
    public void saveDoctor(Doctor doctor) {
        idoctorrepository.save(doctor);
    }

    @Override
    public void deleteDoctor(Long id) {
        idoctorrepository.deleteById(id);
    }

    @Override
    public Doctor findDoctor(Long id) {
        Doctor doctor = idoctorrepository.findById(id).orElse(null);
        return doctor;
    }
    
}
