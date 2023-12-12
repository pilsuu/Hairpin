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

    // @Query("SELECT NEW hairpin.demo.dto.MatchListDTO(c.name, r.usageDate,
    // r.matchTime, r.matchTypeGender) " +
    // "FROM Reservation r " +
    // "INNER JOIN r.courtId c " +
    // "WHERE c.id = :courtId")
    // List<MatchListDTO> findReservationsWithCourtName(@Param("courtId") Integer
    // courtId);

    @Query("SELECT NEW hairpin.demo.dto.MatchListDTO(c.name, r.usageDate, r.matchTime, r.matchTypeGender) " +
            "FROM Reservation r " +
            "JOIN r.courtId c " +
            "WHERE r.usageDate = :usageDate")
    List<MatchListDTO> findMatchListByUsageDate(@Param("usageDate") LocalDate usageDate);

}
