package hairpin.demo.repository;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import hairpin.demo.entity.MatchInfo;

@Repository
public interface MatchInfoRepository extends JpaRepository<MatchInfo, Integer> {
    List<MatchInfo> findByFieldName(String keyword);
}
