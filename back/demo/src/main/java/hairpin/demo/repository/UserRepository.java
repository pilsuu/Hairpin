package hairpin.demo.repository;

import hairpin.demo.entity.Users_User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users_User, Integer> {
}
