package tcs.smartcity.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	@RequestMapping("/allTankWithCountOfFillage")
	public @ResponseBody String getAllAssettsWithCountOfFillage() {
		System.out.println(((List<Tank>) tankRepository.findAll()).size());
		List<Tank> allTanks = (List<Tank>) tankRepository.findAll();
		int chlorineLow=0,chlorineMedium=0,chlorineHigh=0,leadLow=0,leadMedium=0,leadHigh=0,pHLow=0,pHMedium=0,pHHigh=0,turbidityLow=0,turbidityMedium=0,turbidityHigh=0;
		for(Tank oneTank:allTanks)
		{
			if(oneTank.getChlorine()<25)
				chlorineLow++;
			if(oneTank.getChlorine()>25&&oneTank.getChlorine()<75)
				chlorineMedium++;
			if(oneTank.getChlorine()>75)
				chlorineHigh++;
			if(oneTank.getLead()<25)
				leadLow++;
			if(oneTank.getLead()>25&&oneTank.getLead()<75)
				leadMedium++;
			if(oneTank.getLead()>75)
				leadHigh++;
			
			if(oneTank.getPh()<25)
				pHLow++;
			if(oneTank.getPh()>25&&oneTank.getPh()<75)
				pHMedium++;
			if(oneTank.getPh()>75)
				pHHigh++;
			if(oneTank.getTurbidity()<25)
				turbidityLow++;
			if(oneTank.getTurbidity()>25&&oneTank.getTurbidity()<75)
				turbidityMedium++;
			if(oneTank.getTurbidity()>75)
				turbidityHigh++;
		}
		JSONObject jsonLevels = new JSONObject();
		jsonLevels.put("chlorineLow", chlorineLow);
		jsonLevels.put("chlorineMedium", chlorineMedium);
		jsonLevels.put("chlorineHigh", chlorineHigh);
		jsonLevels.put("leadLow", leadLow);
		jsonLevels.put("leadMedium", leadMedium);
		jsonLevels.put("leadHigh", leadHigh);
		jsonLevels.put("pHLow", pHLow);
		jsonLevels.put("pHMedium", pHMedium);
		jsonLevels.put("pHHigh", pHHigh);
		jsonLevels.put("turbidityLow", turbidityLow);
		jsonLevels.put("turbidityMedium", turbidityMedium);
		jsonLevels.put("turbidityHigh", turbidityHigh);
		
        return jsonLevels.toString();
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
