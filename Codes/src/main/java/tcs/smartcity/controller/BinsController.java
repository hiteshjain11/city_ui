package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Bins;
import tcs.smartcity.repository.BinsRepository;

@RestController
public class BinsController {
	
	
	@Autowired
	BinsRepository binsRepository;
	
	
	
	@RequestMapping("/allBins")
    List<Bins> getAllAssetts() {
		System.out.println(((List<Bins>) binsRepository.findAll()).size());
        return (List<Bins>) binsRepository.findAll();
    }
	
	@RequestMapping("/bins25Fillage")
    List<Bins> bins25Fillage() {
		System.out.println(((List<Bins>) binsRepository.findFillageLevel1()).size());
        return (List<Bins>) binsRepository.findFillageLevel1();
    }
	
	@RequestMapping("/bins25To50Fillage")
    List<Bins> bins50Fillage() {
		System.out.println(((List<Bins>) binsRepository.findFillageLevel2()).size());
        return (List<Bins>) binsRepository.findFillageLevel2();
    }
	
	@RequestMapping("/bins50To75Fillage")
    List<Bins> bins75Fillage() {
		System.out.println(((List<Bins>) binsRepository.findFillageLevel3()).size());
        return (List<Bins>) binsRepository.findFillageLevel3();
    }
	
	@RequestMapping("/bins75To100Fillage")
    List<Bins> bins100Fillage() {
		System.out.println(((List<Bins>) binsRepository.findFillageLevel4()).size());
        return (List<Bins>) binsRepository.findFillageLevel4();
    }
	
	@RequestMapping("/gas25Fillage")
    List<Bins> gas25Fillage() {
		System.out.println(((List<Bins>) binsRepository.findGasLevel1()).size());
        return (List<Bins>) binsRepository.findGasLevel1();
    }
	
	@RequestMapping("/gas25To50Fillage")
    List<Bins> gas50Fillage() {
		System.out.println(((List<Bins>) binsRepository.findGasLevel2()).size());
        return (List<Bins>) binsRepository.findGasLevel2();
    }
	
	@RequestMapping("/gas50To75Fillage")
    List<Bins> gas75Fillage() {
		System.out.println(((List<Bins>) binsRepository.findGasLevel3()).size());
        return (List<Bins>) binsRepository.findGasLevel3();
    }
	
	@RequestMapping("/gas75To100Fillage")
    List<Bins> gas100Fillage() {
		System.out.println(((List<Bins>) binsRepository.findGasLevel4()).size());
        return (List<Bins>) binsRepository.findGasLevel4();
    }
	

}
