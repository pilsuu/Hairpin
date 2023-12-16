package hairpin.demo.service;

import java.util.List;
import hairpin.demo.dto.MatchListDTO;

import hairpin.demo.entity.Reservation;
import hairpin.demo.repository.ReservationRepository;
import jakarta.transaction.Transactional;
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

    public MatchListDTO getMatch(Integer id) {
        return reservationRepository.findMatchByReservationId(id);
    }

    public Integer getNumberOfReservations(Reservation reservation) {
        return reservationRepository.findReservationCnt(reservation);
    }

    @Transactional
    public void update(Integer id, Boolean isReserved) {
        Reservation reservation = reservationRepository.findById(id).get();
        reservation.setIsReserved(isReserved);
    }
}
