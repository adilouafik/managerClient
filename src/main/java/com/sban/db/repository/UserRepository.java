package com.sban.db.repository;

import com.sban.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * That class was created by Mikolaj Matejko
 * on 23.09.2016 20:14 as part of spring-boot-angular2 project.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsernameIgnoreCaseOrEmailIgnoreCase(String username, String email);

    User findByUsernameIgnoreCase(String username);

    User findByEmailIgnoreCase(String email);
}
