package hairpin.demo.dto;

import lombok.Data;


@Data
public class BookInfoDTO {
    private Integer userId;

    private Integer reservationId;

    private String gender;

    public BookInfoDTO(Integer userId, Integer reservationId, String gender) {
        this.userId = userId;
        this.reservationId = reservationId;
        this.gender = gender;

    }
}