package tcs.smartcity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tcs.smartcity.entity.Tank;

@Repository
public interface TankRepository extends CrudRepository<Tank,Long> {
	
	@Query("SELECT b FROM Tank b where b.ph<=25")
	List<Tank> findPhLevel1();
	
	@Query("SELECT b FROM Tank b where b.ph>25 and b.ph<50")
	List<Tank> findPhLevel2();
	
	@Query("SELECT b FROM Tank b where b.ph>50 and b.ph<75")
	List<Tank> findPhLevel3();
	
	@Query("SELECT b FROM Tank b where b.ph>75")
	List<Tank> findPhLevel4();
	
	@Query("SELECT b FROM Tank b where b.chlorine<=25")
	List<Tank> findChlorineLevel1();
	
	@Query("SELECT b FROM Tank b where b.chlorine>25 and b.chlorine<50")
	List<Tank> findChlorineLevel2();
	
	@Query("SELECT b FROM Tank b where b.chlorine>50 and b.chlorine<75")
	List<Tank> findChlorineLevel3();
	
	@Query("SELECT b FROM Tank b where b.chlorine>75")
	List<Tank> findChlorineLevel4();
	
	@Query("SELECT b FROM Tank b where b.turbidity<=25")
	List<Tank> findTurbidityLevel1();
	
	@Query("SELECT b FROM Tank b where b.turbidity>25 and b.turbidity<50")
	List<Tank> findTurbidityLevel2();
	
	@Query("SELECT b FROM Tank b where b.turbidity>50 and b.turbidity<75")
	List<Tank> findTurbidityLevel3();
	
	@Query("SELECT b FROM Tank b where b.turbidity>75")
	List<Tank> findTurbidityLevel4();
	
	@Query("SELECT b FROM Tank b where b.lead<=25")
	List<Tank> findLeadLevel1();
	
	@Query("SELECT b FROM Tank b where b.lead>25 and b.lead<50")
	List<Tank> findLeadLevel2();
	
	@Query("SELECT b FROM Tank b where b.lead>50 and b.lead<75")
	List<Tank> findLeadLevel3();
	
	@Query("SELECT b FROM Tank b where b.lead>75")
	List<Tank> findLeadLevel4();
}
