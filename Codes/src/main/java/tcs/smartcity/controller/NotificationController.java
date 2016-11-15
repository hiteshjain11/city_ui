package tcs.smartcity.controller;

import java.util.List;
import java.util.Random;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tcs.smartcity.entity.Notification;
import tcs.smartcity.repository.NotificationRepository;

@RestController
public class NotificationController {
	
	
	@Autowired
	NotificationRepository notificationRepository;
	
	
	
	@RequestMapping("/allNotification")
    List<Notification> getCompanyData() {
		System.out.println(((List<Notification>) notificationRepository.findAll()).size());
        return (List<Notification>) notificationRepository.findAll();
    }
	
	@RequestMapping("/unattendedNotification")
    int getUnattendedNotification() {
		System.out.println(notificationRepository.findUnattendedNotification().size());
        return notificationRepository.findUnattendedNotification().size();
    }
	
	@RequestMapping("/unattendedNotificationBasedonType")
	public @ResponseBody String getUnattendedNotificationbasedOntype() {
		List<Notification> allNotifications = (List<Notification>) notificationRepository.findAll();
		int bins=0,tank=0,transport=0,hospital=0;
		for(Notification oneNotification:allNotifications)
		{
			if(oneNotification.getNotificationtype().equalsIgnoreCase("bins"))
				bins++;
			if(oneNotification.getNotificationtype().equalsIgnoreCase("tank"))
				tank++;
			if(oneNotification.getNotificationtype().equalsIgnoreCase("transport"))
				transport++;
			if(oneNotification.getNotificationtype().equalsIgnoreCase("hospital"))
				hospital++;
		}
		JSONObject jsonLevels = new JSONObject();
		jsonLevels.put("bins", bins);
		jsonLevels.put("tank", tank);
		jsonLevels.put("transport", transport);
		jsonLevels.put("hospital", hospital);
		
        return jsonLevels.toString();
    }
	
	@RequestMapping("/healthMeterNotification")
    int gethealthMeterNotification() {
		Random randomGenerator = new Random();
        return randomGenerator.nextInt(100);
    }
	

}
