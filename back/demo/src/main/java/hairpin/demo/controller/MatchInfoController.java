package hairpin.demo.controller;

import hairpin.demo.dto.MatchListDTO;
import hairpin.demo.service.ReservationService;

import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
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

@Tag(name = "Match", description = "배드민턴 코트(경기) 정보, 예약을 위한 컨트롤러")
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping
public class MatchInfoController {

    @Autowired
    private ReservationService reservationService;

    @Operation(summary = "테스트", description = "서버가 컨테이너로 잘 올라갔는지 확인합니다.")
    @GetMapping("/matchLists2")
    public String matchLists2() {
        return "hello";
    }

    @Operation(summary = "예약 가능한 배드민턴 코트 목록 조회", description = "예약 가능한 배드민턴 코트(경기) 목록를 날짜 별로 조회합니다.")
    @GetMapping("/matchLists")
    public List<MatchListDTO> getMatchListDTO(@RequestParam LocalDate time) {

        return reservationService.reservationListTest(time);
    }

    @Operation(summary = "예약 정보 조회",  description = "사용자가 예약 목록에서 선택한 예약 정보를 조회합니다.")
    @GetMapping("/match")
    public MatchListDTO getMatchDTO(@RequestParam Integer id) {
        return reservationService.getMatch(id);
    }
}
