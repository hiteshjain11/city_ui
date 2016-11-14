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
public class Transport {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int transportid;

    private String transportname;
    private int totalavailable;
    private int occupied;
    private int unoccupied;
	public int getTransportid() {
		return transportid;
	}
	public void setTransportid(int transportid) {
		this.transportid = transportid;
	}
	public String getTransportname() {
		return transportname;
	}
	public void setTransportname(String transportname) {
		this.transportname = transportname;
	}
	public int getTotalavailable() {
		return totalavailable;
	}
	public void setTotalavailable(int totalavailable) {
		this.totalavailable = totalavailable;
	}
	public int getOccupied() {
		return occupied;
	}
	public void setOccupied(int occupied) {
		this.occupied = occupied;
	}
	public int getUnoccupied() {
		return unoccupied;
	}
	public void setUnoccupied(int unoccupied) {
		this.unoccupied = unoccupied;
	}
    
	
    
	
    

}
