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
public class Bins {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int binid;

    private String binname;
    private int fillagelevel;
    private int gaslevel;
	public int getBinid() {
		return binid;
	}
	public void setBinid(int binid) {
		this.binid = binid;
	}
	public String getBinname() {
		return binname;
	}
	public void setBinname(String binname) {
		this.binname = binname;
	}
	public int getFillagelevel() {
		return fillagelevel;
	}
	public void setFillagelevel(int fillagelevel) {
		this.fillagelevel = fillagelevel;
	}
	public int getGaslevel() {
		return gaslevel;
	}
	public void setGaslevel(int gaslevel) {
		this.gaslevel = gaslevel;
	}
    
    
    
    

}
