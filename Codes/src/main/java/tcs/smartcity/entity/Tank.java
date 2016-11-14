package tcs.smartcity.entity;

import java.sql.Date;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;


@Entity
public class Tank {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int tankid;

    private String tankname;
    private int ph;
    private int chlorine;
    private int turbidity;
    private int lead;
    
	public int getTankid() {
		return tankid;
	}
	public void setTankid(int tankid) {
		this.tankid = tankid;
	}
	public String getTankname() {
		return tankname;
	}
	public void setTankname(String tankname) {
		this.tankname = tankname;
	}
	public int getPh() {
		return ph;
	}
	public void setPh(int ph) {
		this.ph = ph;
	}
	public int getChlorine() {
		return chlorine;
	}
	public void setChlorine(int chlorine) {
		this.chlorine = chlorine;
	}
	public int getTurbidity() {
		return turbidity;
	}
	public void setTurbidity(int turbidity) {
		this.turbidity = turbidity;
	}
	public int getLead() {
		return lead;
	}
	public void setLead(int lead) {
		this.lead = lead;
	}
    

}
