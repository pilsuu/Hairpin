package hairpin.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import hairpin.demo.entity.User;
import hairpin.demo.repository.*;
import java.util.Random;

@SpringBootTest
class DemoApplicationTests {

	@Autowired
	private UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void userInsertTest() {
		User userRandGen = new User();

		for (int i = 0; i <= 10; i++) {

			System.out.println("i: " + i);
			String[] randomGender = { "Mixed", "Male", "Female" };
			String defaultName = "user";
			String randUser = defaultName + i;
			String defaultPhone = "010-xxxx-xxx";
			// 랜덤 객체 생성
			Random random = new Random();
			String randPhoneNum = defaultPhone + random.nextInt(10);

			// 0부터 2까지의 랜덤 정수 생성
			int randomNumber = random.nextInt(3); // 0, 1, 2 중 하나의 값

			userRandGen.setId(i);
			userRandGen.setGender(randomGender[randomNumber]);
			userRandGen.setName(randUser);
			userRandGen.setPhone_number(randPhoneNum);

			userRepository.save(userRandGen);
		}
	}

}
