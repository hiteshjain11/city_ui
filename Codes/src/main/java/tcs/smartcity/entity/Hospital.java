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
public class Hospital {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int hospitalid;

    private String hospitalname;
    private int totalseat;
    private int occupiedseat;
    private int unoccupiedseat;
    
	public int getHospitalid() {
		return hospitalid;
	}
	public void setHospitalid(int hospitalid) {
		this.hospitalid = hospitalid;
	}
	public String getHospitalname() {
		return hospitalname;
	}
	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}
	public int getTotalseat() {
		return totalseat;
	}
	public void setTotalseat(int totalseat) {
		this.totalseat = totalseat;
	}
	public int getOccupiedseat() {
		return occupiedseat;
	}
	public void setOccupiedseat(int occupiedseat) {
		this.occupiedseat = occupiedseat;
	}
	public int getUnoccupiedseat() {
		return unoccupiedseat;
	}
	public void setUnoccupiedseat(int unoccupiedseat) {
		this.unoccupiedseat = unoccupiedseat;
	}
    
	
    

}
