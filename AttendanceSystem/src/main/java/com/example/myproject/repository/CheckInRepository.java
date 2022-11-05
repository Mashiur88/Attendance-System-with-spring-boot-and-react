package com.example.myproject.repository;

import com.example.myproject.model.CheckIn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RepositoryRestResource
public interface CheckInRepository extends JpaRepository<CheckIn, Integer> {

    @Query(value = "SELECT c.*,u.* FROM check_in c inner join User u on c.user_id = u.id WHERE u.name = :name",
            nativeQuery = true)
    List<CheckIn> findCheckInByUserNamedParamsNative(
            @Param("name") String name);

    @Query(value = "SELECT c.* FROM check_in c inner join User u on c.user_id = u.id WHERE DATE(c.check_in_date_time) = :date",
            nativeQuery = true)
    List<CheckIn> findCheckInByCheckInDateNamedParamsNative(
            @Param("date") String date);

    @Query(value = "SELECT c.* FROM check_in c inner join User u on c.user_id = u.id WHERE MONTH(c.check_in_date_time) = :month",
            nativeQuery = true)
    List<CheckIn> findCheckInByCheckInMonthNamedParamsNative(
            @Param("month") String month);

    @Query(value = "SELECT c.* FROM check_in c inner join User u on c.user_id = u.id WHERE MONTH(c.check_in_date_time) = :month and u.name = :name",
            nativeQuery = true)
    List<CheckIn> findCheckInByCheckInMonthAndNameNamedParamsNative(
            @Param("month") String month, @Param("name") String name);

}
