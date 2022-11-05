package com.example.myproject.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
// extends BaseEntity<Integer>
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotEmpty
    @Size(min = 6, max = 30)
    @Column(unique = true)
    private String username;
    @NotEmpty
    @Size(min = 10)
    private String password;
    private String name;
    @Email
    private String email;
    @Enumerated(EnumType.STRING)
    @NotNull
    private Gender gender;
    private String phone_no;
    @Enumerated(EnumType.STRING)
    @NotNull
    private Role role;
    private String designation;
    @OneToMany(mappedBy = "user")
    private Set<CheckIn> checkIns = new HashSet<>();

}

