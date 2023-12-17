package hairpin.demo.dto;

import lombok.Data;

@Data
public class BookInfoDTO {
    private Integer reservationId;
    private Integer userId;
    private String gender;
}
