package hairpin.demo.controller;

import hairpin.demo.dto.MatchListDTO;
import hairpin.demo.entity.MatchInfo;
import hairpin.demo.service.MatchInfoService;
import hairpin.demo.service.ReservationService;

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
import java.time.LocalDate;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class MatchInfoController {

    @Autowired
    private MatchInfoService matchInfoService;

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/matchLists")
    public List<MatchInfo> matchLists() {
        return matchInfoService.list();
    }

    @GetMapping("/matchLists2")
    public String matchLists2() {
        return "hello";
    }

    @GetMapping("/time")
    public LocalDate time() {
        LocalDate currentDate = LocalDate.now();
        return currentDate;
    }

    @GetMapping("/test")
    public List<MatchListDTO> getMatchListDTO(@RequestParam LocalDate time) {

        return reservationService.reservationListTest(time);
    }

}
