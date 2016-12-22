package com.sban.service;

import com.sban.db.repository.UserRepository;
import com.sban.model.RegisterForm;
import org.springframework.stereotype.Service;

/**
 * That class was created by Mikolaj Matejko
 * on 02.09.2016 23:08 as part of spring-boot-angular2 project.
 */
@Service
public class UserService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    public UserService(UserMapper userMapper, UserRepository userRepository) {
        this.userMapper = userMapper;
        this.userRepository = userRepository;
    }

    public boolean register(RegisterForm obj) {
        return null != userRepository.save(userMapper.registerFormToUser(obj));
    }

    public boolean usernameAvailable(String username) {
        return null == userRepository.findByUsernameIgnoreCase(username);
    }

    public boolean emailAvailable(String email) {
        return null == userRepository.findByEmailIgnoreCase(email);
    }
}
