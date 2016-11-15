package tcs.smartcity.controller;

import java.util.List;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	@RequestMapping("/allBinsWithCountOfFillage")
	public @ResponseBody String getAllAssettsWithCountOfFillage() {
		System.out.println(((List<Bins>) binsRepository.findAll()).size());
		List<Bins> allBins = (List<Bins>) binsRepository.findAll();
		int fillageLow=0,fillageMedium=0,fillageHigh=0,gasLow=0,gasMedium=0,gasHigh=0;
		for(Bins oneBin:allBins)
		{
			if(oneBin.getFillagelevel()<25)
				fillageLow++;
			if(oneBin.getFillagelevel()>25&&oneBin.getFillagelevel()<75)
				fillageMedium++;
			if(oneBin.getFillagelevel()>75)
				fillageHigh++;
			if(oneBin.getGaslevel()<10)
				gasLow++;
			if(oneBin.getGaslevel()>10&&oneBin.getGaslevel()<25)
				gasMedium++;
			if(oneBin.getGaslevel()>25)
				gasHigh++;
		}
		JSONObject jsonLevels = new JSONObject();
		jsonLevels.put("fillageLow", fillageLow);
		jsonLevels.put("fillageMedium", fillageMedium);
		jsonLevels.put("fillageHigh", fillageHigh);
		jsonLevels.put("gasLow", gasLow);
		jsonLevels.put("gasMedium", gasMedium);
		jsonLevels.put("gasHigh", gasHigh);
		
        return jsonLevels.toString();
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
