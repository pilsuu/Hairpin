package hairpin.demo.controller;

import hairpin.demo.entity.MatchInfo;
import hairpin.demo.service.MatchInfoService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class MatchInfoController {

    @Autowired
    private MatchInfoService matchInfoService;

    @GetMapping("/matchLists")
    public List<MatchInfo> matchLists() {
        return matchInfoService.list();
    }

}
