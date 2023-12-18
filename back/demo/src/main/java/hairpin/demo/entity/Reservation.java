package hairpin.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Reservation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;

    @Column(name = "date", nullable = false)
    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private LocalDate usageDate;

    // @DateTimeFormat
    @Column(nullable = false)
    private Integer matchTime;

    @Column(columnDefinition = "int default 2", nullable = false)
    private Integer playTime;

    @Column(columnDefinition = "tinyint default 0", nullable = false)
    private Boolean isReserved;

    @Column(nullable = false)
    private String matchTypeGender;

    @Column(nullable = false)
    private String matchTypePlaying;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "court_id", nullable = false, updatable = false)
    })
    private Court courtId;

}
