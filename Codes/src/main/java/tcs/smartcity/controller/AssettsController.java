package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Assetts;
import tcs.smartcity.repository.AssettsRepository;

@RestController
public class AssettsController {
	
	
	@Autowired
	AssettsRepository assettsRepository;
	
	
	
	@RequestMapping("/allAssetts")
    List<Assetts> getAllAssetts() {
		System.out.println(((List<Assetts>) assettsRepository.findAll()).size());
        return (List<Assetts>) assettsRepository.findAll();
    }
	

}
