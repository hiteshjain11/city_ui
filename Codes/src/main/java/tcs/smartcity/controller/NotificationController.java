package tcs.smartcity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
	

}
