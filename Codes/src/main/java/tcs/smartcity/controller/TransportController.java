package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Transport;
import tcs.smartcity.repository.TransportRepository;

@RestController
public class TransportController {
	
	
	@Autowired
	TransportRepository transportRepository;
	
	
	
	@RequestMapping("/allTransport")
    List<Transport> getAllAssetts() {
		System.out.println(((List<Transport>) transportRepository.findAll()).size());
        return (List<Transport>) transportRepository.findAll();
    }

}
