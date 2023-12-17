package hairpin.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@IdClass(GameID.class)
public class Game {

    @Id
    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservationId;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users_User userId;

    @Column(nullable = false, insertable = false, updatable = false, columnDefinition = "timestamp(6) default current_timestamp(6)")
    private LocalDateTime bookingTime;

}
