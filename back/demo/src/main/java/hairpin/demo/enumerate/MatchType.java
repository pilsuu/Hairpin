package hairpin.demo.enumerate;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MatchType {

    단식(2),
    복식(4);

    private Integer num;

}