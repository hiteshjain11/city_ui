package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Tank;
import tcs.smartcity.repository.TankRepository;

@RestController
public class TankController {
	
	
	@Autowired
	TankRepository tankRepository;
	
	
	
	@RequestMapping("/allTank")
    List<Tank> getAllAssetts() {
		System.out.println(((List<Tank>) tankRepository.findAll()).size());
        return (List<Tank>) tankRepository.findAll();
    }
	
	@RequestMapping("/tank25Ph")
    List<Tank> tank25Ph() {
		System.out.println(((List<Tank>) tankRepository.findPhLevel1()).size());
        return (List<Tank>) tankRepository.findPhLevel1();
    }
	
	@RequestMapping("/tank25To50Ph")
    List<Tank> tank50Ph() {
		System.out.println(((List<Tank>) tankRepository.findPhLevel2()).size());
        return (List<Tank>) tankRepository.findPhLevel2();
    }
	
	@RequestMapping("/tank50To75Ph")
    List<Tank> tank75Ph() {
		System.out.println(((List<Tank>) tankRepository.findPhLevel3()).size());
        return (List<Tank>) tankRepository.findPhLevel3();
    }
	
	@RequestMapping("/tank75To100Ph")
    List<Tank> tank100Ph() {
		System.out.println(((List<Tank>) tankRepository.findPhLevel4()).size());
        return (List<Tank>) tankRepository.findPhLevel4();
    }
	
	@RequestMapping("/tank25Chlorine")
    List<Tank> tank25Chlorine() {
		System.out.println(((List<Tank>) tankRepository.findChlorineLevel1()).size());
        return (List<Tank>) tankRepository.findChlorineLevel1();
    }
	
	@RequestMapping("/tank25To50Chlorine")
    List<Tank> tank50Chlorine() {
		System.out.println(((List<Tank>) tankRepository.findChlorineLevel2()).size());
        return (List<Tank>) tankRepository.findChlorineLevel2();
    }
	
	@RequestMapping("/tank50To75Chlorine")
    List<Tank> tank75Chlorine() {
		System.out.println(((List<Tank>) tankRepository.findChlorineLevel3()).size());
        return (List<Tank>) tankRepository.findChlorineLevel3();
    }
	
	@RequestMapping("/tank75To100Chlorine")
    List<Tank> tank100Chlorine() {
		System.out.println(((List<Tank>) tankRepository.findChlorineLevel4()).size());
        return (List<Tank>) tankRepository.findChlorineLevel4();
    }
	
	@RequestMapping("/tank25Turbidity")
    List<Tank> tank25Turbidity() {
		System.out.println(((List<Tank>) tankRepository.findTurbidityLevel1()).size());
        return (List<Tank>) tankRepository.findTurbidityLevel1();
    }
	
	@RequestMapping("/tank25To50Turbidity")
    List<Tank> tank50Turbidity() {
		System.out.println(((List<Tank>) tankRepository.findTurbidityLevel2()).size());
        return (List<Tank>) tankRepository.findTurbidityLevel2();
    }
	
	@RequestMapping("/tank50To75Turbidity")
    List<Tank> tank75Turbidity() {
		System.out.println(((List<Tank>) tankRepository.findTurbidityLevel3()).size());
        return (List<Tank>) tankRepository.findTurbidityLevel3();
    }
	
	@RequestMapping("/tank75To100Turbidity")
    List<Tank> tank100Turbidity() {
		System.out.println(((List<Tank>) tankRepository.findTurbidityLevel4()).size());
        return (List<Tank>) tankRepository.findTurbidityLevel4();
    }
	
	@RequestMapping("/tank25Lead")
    List<Tank> tank25Lead() {
		System.out.println(((List<Tank>) tankRepository.findLeadLevel1()).size());
        return (List<Tank>) tankRepository.findLeadLevel1();
    }
	
	@RequestMapping("/tank25To50Lead")
    List<Tank> tank50Lead() {
		System.out.println(((List<Tank>) tankRepository.findLeadLevel2()).size());
        return (List<Tank>) tankRepository.findLeadLevel2();
    }
	
	@RequestMapping("/tank50To75Lead")
    List<Tank> tank75Lead() {
		System.out.println(((List<Tank>) tankRepository.findLeadLevel3()).size());
        return (List<Tank>) tankRepository.findLeadLevel3();
    }
	
	@RequestMapping("/tank75To100Lead")
    List<Tank> tank100Lead() {
		System.out.println(((List<Tank>) tankRepository.findLeadLevel4()).size());
        return (List<Tank>) tankRepository.findLeadLevel4();
    }

}
