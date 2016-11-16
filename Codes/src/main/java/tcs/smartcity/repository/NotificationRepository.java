package tcs.smartcity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;




import tcs.smartcity.entity.Notification;

@Repository
public interface NotificationRepository extends CrudRepository<Notification,Long> {
	
	@Query( "select noti from Notification noti where notificationstatus!='Close'" )
	List<Notification> findUnattendedNotification();

}
