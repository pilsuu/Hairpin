package hairpin.demo.controller;

import hairpin.demo.dto.BookInfoDTO;
import hairpin.demo.entity.Game;
import hairpin.demo.entity.GameID;
import hairpin.demo.entity.Reservation;
import hairpin.demo.enumerate.Gender;
import hairpin.demo.enumerate.MatchType;
import hairpin.demo.repository.GameRepository;
import hairpin.demo.repository.ReservationRepository;
import hairpin.demo.repository.UserRepository;
import hairpin.demo.service.ReservationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@Tag(name = "Reservation", description = "배드민턴 코트(경기) 예약 컨트롤러")
@CrossOrigin(origins = { "http://localhost:3000" }, allowedHeaders = { "Authorization",
        "Content-Type" }, allowCredentials = "true")
@RestController
@RequestMapping
public class BookingController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReservationService reservationService;

    @Value("${auth.api.url}")
    String apiUrl;

    @SecurityRequirement(name = "Authentication")
    @Operation(summary = "배드민턴 코트 예약 신청", description = "auth-api 서버에 유효한 사용자인지 확인 후 예약 신청을 하고, 경기 인원이 다 차면 예약 완료로 업데이트합니다.")
    @PostMapping("/book")
    public ResponseEntity requestBooking(@RequestHeader HttpHeaders header, @RequestBody BookInfoDTO bookInfoDTO) {

        // React에서 전달한 JWT
        String jwtToken = header.getFirst("Authorization");

        if (jwtToken != null && jwtToken.startsWith("Bearer ")) {
            jwtToken = jwtToken.substring(7);
            if (requestAuth(jwtToken)) {
                Reservation reservation = reservationRepository.getReferenceById(bookInfoDTO.getReservationId());
                String matchType = reservation.getMatchTypePlaying();
                String matchGender = reservation.getMatchTypeGender();
                String userGender = bookInfoDTO.getGender();

                if (matchGender.equals("혼성") || Gender.valueOf(userGender).getTranslation().equals(matchGender)) {
                    if (!gameRepository
                            .existsById(new GameID(bookInfoDTO.getUserId(), bookInfoDTO.getReservationId()))) {
                        Game games = new Game();
                        games.setUserId(userRepository.getReferenceById(bookInfoDTO.getUserId()));
                        games.setReservationId(reservation);
                        gameRepository.save(games);
                    } else {
                        return ResponseEntity.status(808).body("You are already booked");
                    }

                    Integer numOfPeople = reservationService.getNumberOfReservations(reservation);

                    if (numOfPeople == MatchType.valueOf(matchType).getNum()) {
                        reservationService.update(reservation.getId(), true);
                    }
                    return ResponseEntity.ok("book complete");
                }
                return ResponseEntity.status(802).body("wrong select match type"); // 경기 성별 잘못 선택했을 때
            }
            return ResponseEntity.status(801).body("You are not valid member"); // 유효한 회원이 아님
        }
        return ResponseEntity.status(800).body("You are not logged in"); // 로그인 상태가 아님
    }

    // Django 에 HTTP Request 로 유효한 jwt 토큰인지 확인
    public Boolean requestAuth(String jwtToken) {

        HttpHeaders headerForDjango = new HttpHeaders();

        jwtToken = jwtToken.replace("\"", "");
        headerForDjango.setBearerAuth(jwtToken);

        // HTTP 요청을 위한 RestTemplate 생성
        RestTemplate restTemplate = new RestTemplate();

        // HTTP 요청 엔터티 생성
        HttpEntity<String> requestEntity = new HttpEntity<>(headerForDjango);

        // HTTP GET 요청
        ResponseEntity<String> responseEntity = restTemplate.exchange(
                apiUrl,
                HttpMethod.GET,
                requestEntity,
                String.class);

        return responseEntity.getBody().equals("0");
    }
}
