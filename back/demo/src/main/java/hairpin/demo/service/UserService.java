package hairpin.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hairpin.demo.entity.*;
import hairpin.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void add(Users_User user) {
        userRepository.save(user);
    }
}
