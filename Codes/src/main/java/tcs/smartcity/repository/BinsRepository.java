package tcs.smartcity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import tcs.smartcity.entity.Bins;

@Repository
public interface BinsRepository extends CrudRepository<Bins,Long> {
	
	@Query("SELECT b FROM Bins b where b.fillagelevel<=25")
	List<Bins> findFillageLevel1();
	
	@Query("SELECT b FROM Bins b where b.fillagelevel>25 and b.fillagelevel<50")
	List<Bins> findFillageLevel2();
	
	@Query("SELECT b FROM Bins b where b.fillagelevel>50 and b.fillagelevel<75")
	List<Bins> findFillageLevel3();
	
	@Query("SELECT b FROM Bins b where b.fillagelevel>75")
	List<Bins> findFillageLevel4();
	
	@Query("SELECT b FROM Bins b where b.gaslevel<=25")
	List<Bins> findGasLevel1();
	
	@Query("SELECT b FROM Bins b where b.gaslevel>25 and b.gaslevel<50")
	List<Bins> findGasLevel2();
	
	@Query("SELECT b FROM Bins b where b.gaslevel>50 and b.gaslevel<75")
	List<Bins> findGasLevel3();
	
	@Query("SELECT b FROM Bins b where b.gaslevel>75")
	List<Bins> findGasLevel4();
}
