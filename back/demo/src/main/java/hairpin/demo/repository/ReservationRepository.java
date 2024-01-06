package hairpin.demo.repository;

import hairpin.demo.dto.MatchListDTO;
import hairpin.demo.entity.Reservation;
import jakarta.persistence.PersistenceContext;
import java.time.LocalDate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query("SELECT NEW hairpin.demo.dto.MatchListDTO(r.id, r.usageDate, r.matchTime, r.matchTypeGender, r.matchTypePlaying, c.id, c.name, c.location, c.price, c.hasParkingLot) "
            +
            "FROM Reservation r " +
            "JOIN r.courtId c " +
            "WHERE r.isReserved = false AND r.usageDate = :usageDate")
    List<MatchListDTO> findMatchListByUsageDate(@Param("usageDate") LocalDate usageDate);

    @Query("SELECT NEW hairpin.demo.dto.MatchListDTO(r.id, r.usageDate, r.matchTime, r.matchTypeGender, r.matchTypePlaying, c.id, c.name, c.location, c.price, c.hasParkingLot) "
            +
            "FROM Reservation r " +
            "JOIN r.courtId c " +
            "WHERE r.isReserved = false AND r.id = :reservationId")
    MatchListDTO findMatchByReservationId(@Param("reservationId") Integer reservationId);

    @Query("SELECT COUNT(g) FROM Game g WHERE g.reservationId = :reservationId")
    Integer findReservationCnt(@Param("reservationId") Reservation reservation);
}
