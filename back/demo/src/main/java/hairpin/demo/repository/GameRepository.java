package hairpin.demo.repository;

import hairpin.demo.entity.Game;
import hairpin.demo.entity.GameID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, GameID> {
}
