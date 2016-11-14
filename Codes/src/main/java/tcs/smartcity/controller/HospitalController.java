package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Hospital;
import tcs.smartcity.repository.HospitalRepository;

@RestController
public class HospitalController {
	
	
	@Autowired
	HospitalRepository hospitalRepository;
	
	
	
	@RequestMapping("/allHospitals")
    List<Hospital> getAllAssetts() {
		System.out.println(((List<Hospital>) hospitalRepository.findAll()).size());
        return (List<Hospital>) hospitalRepository.findAll();
    }

}
