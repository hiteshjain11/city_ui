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
    private int medicine1;
    private int medicine2;
    private int medicine3;
    
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
	public int getMedicine1() {
		return medicine1;
	}
	public void setMedicine1(int medicine1) {
		this.medicine1 = medicine1;
	}
	public int getMedicine2() {
		return medicine2;
	}
	public void setMedicine2(int medicine2) {
		this.medicine2 = medicine2;
	}
	public int getMedicine3() {
		return medicine3;
	}
	public void setMedicine3(int medicine3) {
		this.medicine3 = medicine3;
	}
    
	
    

}
