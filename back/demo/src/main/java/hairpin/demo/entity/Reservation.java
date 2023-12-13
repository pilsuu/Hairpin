package hairpin.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Reservation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;

    @Column(name = "date")
    @DateTimeFormat(pattern = "YYYY-MM-DD")
    private LocalDate usageDate;

    // @DateTimeFormat
    private Integer matchTime;

    @Column(columnDefinition = "int default 2")
    private Integer playTime;

    private Boolean isReserved;

    private String matchTypeGender;

    private String matchTypePlaying;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "court_id", nullable = false, updatable = false)
    })
    private Court courtId;

}
