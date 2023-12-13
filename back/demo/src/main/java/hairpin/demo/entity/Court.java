package hairpin.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Court {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "owner_id", nullable = false, updatable = false)
    })
    private User user;

    private String name;

    private String location;

    private Integer price;

    private Boolean hasParkingLot;
}
