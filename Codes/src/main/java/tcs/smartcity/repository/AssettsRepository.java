package tcs.smartcity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;





import tcs.smartcity.entity.Assetts;

@Repository
public interface AssettsRepository extends CrudRepository<Assetts,Long> {
}
