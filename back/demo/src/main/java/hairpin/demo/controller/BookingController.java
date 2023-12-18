package hairpin.demo.controller;

import hairpin.demo.dto.BookInfoDTO;
import hairpin.demo.entity.Game;
import hairpin.demo.entity.GameID;
import hairpin.demo.entity.Reservation;
import hairpin.demo.controller.constant.ConstInfo;
import hairpin.demo.repository.GameRepository;
import hairpin.demo.repository.ReservationRepository;
import hairpin.demo.repository.UserRepository;
import hairpin.demo.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = { "http://localhost:3000" }, allowedHeaders = { "Authorization" })
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

    public ConstInfo constInfo = new ConstInfo();

    @PostMapping("/book")
    public ResponseEntity getBookInfo(@RequestHeader HttpHeaders header, @RequestBody BookInfoDTO bookInfoDTO) {

        // React에서 전달한 JWT
        String jwtToken = header.getFirst("Authorization");

        if (jwtToken != null && jwtToken.startsWith("Bearer ")) {
            jwtToken = jwtToken.substring(7);
            if (requestAuth(jwtToken)) {
                Reservation reservation = reservationRepository.getReferenceById(bookInfoDTO.getReservationId());
                String matchType = reservation.getMatchTypePlaying();
                String matchGender = reservation.getMatchTypeGender();
                String userGender = bookInfoDTO.getGender();
                String convertedGender = constInfo.genderConverter(userGender);
                System.out.println("한영 변형: " + convertedGender);

                if (matchGender.equals("혼성") || matchGender.equals(convertedGender)) {
                    if (!gameRepository
                            .existsById(new GameID(bookInfoDTO.getUserId(), bookInfoDTO.getReservationId()))) {
                        Game games = new Game();
                        games.setUserId(userRepository.getReferenceById(bookInfoDTO.getUserId()));
                        games.setReservationId(reservation);
                        gameRepository.save(games);
                        // System.out.println("games: " + games);
                    } else {
                        return ResponseEntity.status(808).body("You are already booked");
                    }

                    Integer numOfPeople = reservationService.getNumberOfReservations(reservation);

                    if (numOfPeople == constInfo.getNum(matchType)) {
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

        if (responseEntity.getBody().equals("0")) {
            return true;
        }
        return false;
    }
}
