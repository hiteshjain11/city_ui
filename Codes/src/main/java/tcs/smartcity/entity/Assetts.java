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
import org.hibernate.annotations.TypeDef;

import tcs.smartcity.jpasupport.HstoreUserType;


@Entity
@TypeDef(name = "hstore", typeClass = HstoreUserType.class)
public class Assetts {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int assetsid;

    private Double lat;
    private Double longitude;
    private String assetid;
    private String type;
    private String status;
    
    @Column(name="params")
    @Type(type="hstore")
    private Map<String,Object> params;

	public int getAssetsid() {
		return assetsid;
	}

	public void setAssetsid(int assetsid) {
		this.assetsid = assetsid;
	}

	public Double getLat() {
		return lat;
	}

	public void setLat(Double lat) {
		this.lat = lat;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getAssetid() {
		return assetid;
	}

	public void setAssetid(String assetid) {
		this.assetid = assetid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Map<String, Object> getParams() {
		return params;
	}

	public void setParams(Map<String, Object> params) {
		this.params = params;
	}
    

}
