package hairpin.demo.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
public class GameID implements Serializable {

    private Integer userId;

    private Integer reservationId;

}