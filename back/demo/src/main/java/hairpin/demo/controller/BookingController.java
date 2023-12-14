package hairpin.demo.controller;

import hairpin.demo.entity.Game;
import hairpin.demo.entity.GameID;
import hairpin.demo.repository.GameRepository;
import hairpin.demo.repository.ReservationRepository;
import hairpin.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping
public class BookingController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/book")
    public void getBookInfo(@RequestHeader HttpHeaders header, @RequestBody GameID gameId) {

        // React에서 전달한 JWT
        String jwtToken = header.getFirst("Authorization");

        if (jwtToken != null) {
            if (requestAuth(jwtToken)) {
                Game games = new Game();
                games.setUserId(userRepository.getReferenceById(gameId.getUserId()));
                games.setReservationId(reservationRepository.getReferenceById(gameId.getReservationId()));

                gameRepository.save(games);
            }
        }
    }

    //Django 에 HTTP Request 로 유효한 jwt 토큰인지 확인
    public Boolean requestAuth(String jwtToken) {
        final String apiUrl = "http://localhost:8000/users/auth/";

        HttpHeaders headerForDjango = new HttpHeaders();

        headerForDjango.set("Authorization", jwtToken);

        System.out.println(headerForDjango);

        // HTTP 요청을 위한 RestTemplate 생성
        RestTemplate restTemplate = new RestTemplate();

        // HTTP 요청 엔터티 생성
        HttpEntity<String> requestEntity = new HttpEntity<>(headerForDjango);

        // HTTP GET 요청
        ResponseEntity<String> responseEntity = restTemplate.exchange(
                apiUrl,
                HttpMethod.GET,
                requestEntity,
                String.class
        );

        if (responseEntity.getBody().equals("0")) {
            return true;
        }
        return false;
    }
}
