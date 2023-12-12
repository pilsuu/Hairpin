package hairpin.demo.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class MatchListDTO {
    private String name;

    private LocalDate usageDate;

    private Integer matchTime;

    private String matchTypeGender;

    // 매개변수를 받는 생성자
    public MatchListDTO(String name, LocalDate usageDate, Integer matchTime, String matchTypeGender) {
        this.name = name;
        this.usageDate = usageDate;
        this.matchTime = matchTime;
        this.matchTypeGender = matchTypeGender;
    }
}
