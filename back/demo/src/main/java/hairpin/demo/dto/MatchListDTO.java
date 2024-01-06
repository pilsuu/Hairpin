package hairpin.demo.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class MatchListDTO {

    private Integer reservationId;

    private LocalDate usageDate;

    private Integer matchTime;

    private String matchTypeGender;

    private String matchTypePlaying;

    private Integer courtId;

    private String name;

    private String location;

    private Integer price;

    private Boolean hasParkingLot;

    // 매개변수를 받는 생성자
    public MatchListDTO(Integer reservationId, LocalDate usageDate, Integer matchTime, String matchTypeGender,
            String matchTypePlaying, Integer courtId, String name, String location, Integer price,
            Boolean hasParkingLot) {
        this.reservationId = reservationId;
        this.usageDate = usageDate;
        this.matchTime = matchTime;
        this.matchTypeGender = matchTypeGender;
        this.matchTypePlaying = matchTypePlaying;
        this.courtId = courtId;
        this.name = name;
        this.location = location;
        this.price = price;
        this.hasParkingLot = hasParkingLot;
    }
}
