package hairpin.demo.service;

import java.util.List;
import hairpin.demo.dto.MatchListDTO;

import hairpin.demo.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<MatchListDTO> reservationListTest(LocalDate Date) {
        return reservationRepository.findMatchListByUsageDate(Date);
    }
}
