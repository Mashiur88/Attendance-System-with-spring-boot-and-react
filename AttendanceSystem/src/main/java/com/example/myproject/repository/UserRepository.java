package com.example.myproject.repository;

import com.example.myproject.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:3000/"})
@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Integer> {

    User findAllByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT * FROM User u WHERE u.username = :username and u.password = :password",
            nativeQuery = true)
    User findUserByUsernameAndPasswordNamedParamsNative(
            @Param("username") String username, @Param("password") String password);

    Page<User> findAllByNameContains(String name, Pageable pageable);

    Page<User> findAllByDesignationContains(String designation, Pageable pageable);

}
