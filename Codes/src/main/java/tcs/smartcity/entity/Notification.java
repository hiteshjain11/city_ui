package tcs.smartcity.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Notification {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int notificationid;

    private Date notificationdate;
    private String notificationday;
    private String notificationassignedto;
    private String notificationtext;
    private String notificationstatus;
    private String notificationtype;
    private Date notificationtime;
    
    
	public int getNotificationid() {
		return notificationid;
	}
	public void setNotificationid(int notificationid) {
		this.notificationid = notificationid;
	}
	public Date getNotificationdate() {
		return notificationdate;
	}
	public void setNotificationdate(Date notificationdate) {
		this.notificationdate = notificationdate;
	}
	public String getNotificationday() {
		return notificationday;
	}
	public void setNotificationday(String notificationday) {
		this.notificationday = notificationday;
	}
	public String getNotificationassignedto() {
		return notificationassignedto;
	}
	public void setNotificationassignedto(String notificationassignedto) {
		this.notificationassignedto = notificationassignedto;
	}
	public String getNotificationtext() {
		return notificationtext;
	}
	public void setNotificationtext(String notificationtext) {
		this.notificationtext = notificationtext;
	}
	public String getNotificationstatus() {
		return notificationstatus;
	}
	public void setNotificationstatus(String notificationstatus) {
		this.notificationstatus = notificationstatus;
	}
	public Date getNotificationtime() {
		return notificationtime;
	}
	public void setNotificationtime(Date notificationtime) {
		this.notificationtime = notificationtime;
	}
	public String getNotificationtype() {
		return notificationtype;
	}
	public void setNotificationtype(String notificationtype) {
		this.notificationtype = notificationtype;
	}
    
    
    
    

    

}
