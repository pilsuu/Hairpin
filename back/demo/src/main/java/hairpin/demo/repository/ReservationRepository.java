package hairpin.demo.repository;

import hairpin.demo.dto.MatchListDTO;
import hairpin.demo.entity.Reservation;
import jakarta.persistence.PersistenceContext;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    // @Query("SELECT r FROM Reservation r INNER JOIN r.courtId rid WHERE
    // r.courtId=:courtId")
    // // @Query("SELECT c.name FROM Reservation r WHERE r.courtId=:courtId")
    // List<Object> findReservationsWithCourtName(@Param("courtId") Integer
    // courtId);
}
