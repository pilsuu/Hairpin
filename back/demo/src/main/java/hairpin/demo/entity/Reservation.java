package hairpin.demo.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

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

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "court_id", nullable = false, updatable = false)
    })
    private Court courtId;

}
