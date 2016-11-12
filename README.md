##### How to Runnnnnnnnnn?

## 1. Upload data to postGres SQL

1.  Download the file `notification.sql` and import it to your postGres DB

## 2. Edit Spring Boot Configuration

1.  In `application.properties` file in folder `src\main\resources` , edit your PostGres username and password

## 3. Running the code

1.  Go to `cmd` prompt and go to folder  `Codes`.
2.  Run `mvn spring-boot:run` from here and wait till code starts
3.  In Chrome, access `localhost:8080/allNotification` and `localhost:8080/unattendedNotification` and see if results are returned
