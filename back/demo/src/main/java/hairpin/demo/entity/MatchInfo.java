package hairpin.demo.entity;

import java.time.ZonedDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
public class MatchInfo {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String matchDate;
    private String matchDay;
    private String fieldName;
    private String fieldAddress;
    private String parking;
    private String price;
    private String matchPlayType;
    private String matchGenderType;
    // private ZonedDateTime created_at;
}
