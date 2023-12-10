package hairpin.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import hairpin.demo.entity.MatchInfo;
import hairpin.demo.repository.MatchInfoRepository;

@Service
public class MatchInfoService {

    @Autowired
    private MatchInfoRepository matchInfoRepository;

    public void add(MatchInfo matchInfo) {
        matchInfoRepository.save(matchInfo);
    }

    public List<MatchInfo> list() {
        return matchInfoRepository.findAll();
    }

    public void delete(Integer id) {
        matchInfoRepository.deleteById(id);
    }
    // public void update(MatchInfo matchInfo) {
    // MatchInfo existingMatchInfo =
    // matchInfoRepository.findById(matchInfo.getId()).orElseThrow(() -> new
    // RuntimeException("MatchInfo not found with id " + matchInfo.getId()));

    // }
    public Optional<MatchInfo> getOneMatch(Integer id) {
        return matchInfoRepository.findById(id);
    }
}
