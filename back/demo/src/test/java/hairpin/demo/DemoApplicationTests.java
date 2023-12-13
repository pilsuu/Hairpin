package hairpin.demo;

import hairpin.demo.entity.Court;
import hairpin.demo.entity.Game;
import hairpin.demo.entity.Reservation;
import hairpin.demo.entity.User;
import hairpin.demo.repository.CourtRepository;
import hairpin.demo.repository.GameRepository;
import hairpin.demo.repository.ReservationRepository;
import hairpin.demo.repository.UserRepository;
import net.bytebuddy.asm.Advice;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

import static com.jayway.jsonpath.internal.path.PathCompiler.fail;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class DemoApplicationTests {
	static {
		try {
			Class.forName("org.hibernate.dialect.MySQLDialect");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}//static

	@Autowired
	public UserRepository userRepository;
	@Autowired
	public CourtRepository courtRepository;
	@Autowired
	public ReservationRepository reservationRepository;
	@Autowired
	public GameRepository gameRepository;

	@Test
	void contextLoads() {
	}

	@Test
	@Order(1)
	void testConnection() {
		try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:50028/mydatabase", "root", "root"))
		{
			System.out.println("DB connection"+con);
//			//insert
//			int executeSql = doInsert(con);
//			System.out.println("총 "+executeSql+"행 실행했습니다.");
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	@Test
	@Order(2)
	void userInsert() {
		Random random = new Random();
		String[] gender = {"남성", "여성"};

		for(int i = 0 ; i< 10; i++){
			User randomUser = new User();

			String generatedString = random.ints(97, 123)
					.limit(6)
					.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
					.toString();

			randomUser.setId(i);
			randomUser.setName("user" + i);
			randomUser.setEmail(generatedString + "@gmail.com");
			randomUser.setGender(gender[random.nextInt(2)]);
			userRepository.save(randomUser);
			Long rawCnt = userRepository.count();
			System.out.println(rawCnt);
		}
	}

	@Test
	@Order(3)
	void courtInsert(){
		Random random = new Random();

		Boolean[] hasCode = {true, false};
		String[] locationArr = {"서울특별시 관악구 신림로 31길 9", "부산광역시 식혜구 마우스로33 23", "전라남도 목포시 아름드리로20 5", "제주특별자치도 서귀포시 잠수함로 4길 65"};
		Long rawCnt = userRepository.count();

		for(int i = 0; i < 10; i++) {
			Court randomCourt = new Court();

			randomCourt.setId(i);
			randomCourt.setName("court" + i);
			randomCourt.setHasParkingLot(hasCode[random.nextInt(2)]);
			randomCourt.setLocation(locationArr[random.nextInt(4)]);
			randomCourt.setPrice(random.ints(0, 100001).findFirst().getAsInt());
			randomCourt.setUser(userRepository.findById(random.nextInt(rawCnt.intValue()) + 1).get());
			courtRepository.save(randomCourt);
		}
	}

	@Test
	@Order(4)
	void reservationInsert(){
		Random random = new Random();

		Boolean[] isReserved = {true, false};
		String[] matchType = {"단식", "남복", "여복", "혼복"};
		LocalDate nowDate = LocalDate.now();
		Long rawCnt = courtRepository.count();

		for(int i = 0; i < 10; i++) {
			Reservation randomReservation = new Reservation();

			randomReservation.setId(i);
			randomReservation.setIsReserved(isReserved[random.nextInt(2)]);
			randomReservation.setMatchTime(random.ints(1, 25).findFirst().getAsInt());
			randomReservation.setPlayTime(2);
			randomReservation.setUsageDate(nowDate.plusDays(i));
			randomReservation.setMatchTypeGender(matchType[random.nextInt(4)]);
			randomReservation.setCourtId(courtRepository.findById(random.nextInt(rawCnt.intValue()) + 1).get());
			reservationRepository.save(randomReservation);
		}
	}

	@Test
	@Order(5)
	void gameInsert(){
		LocalDateTime nowDateTime = LocalDateTime.now();
		Random random = new Random();
		Long userRawCnt = userRepository.count();
		Long reservationRawCnt = reservationRepository.count();

		for(int i = 0; i < 10; i++) {
			Game randomGame = new Game();

			randomGame.setBookingTime(nowDateTime);
			randomGame.setUserId(userRepository.findById(random.nextInt(userRawCnt.intValue()) + 1).get());
			randomGame.setReservationId(reservationRepository.findById(random.nextInt(reservationRawCnt.intValue()) + 1).get());
			gameRepository.save(randomGame);
		}
	}
}
