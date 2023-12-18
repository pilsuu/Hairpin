package hairpin.demo.controller.constant;

public class ConstInfo {

    public static final Integer MATCH_TYPE_DOUBLES = 4;
    public static final Integer MATCH_TYPE_SINGLES = 2;

    public Integer getNum(String matchType) {
        if (matchType == "단식") {
            return MATCH_TYPE_SINGLES;
        }
        return MATCH_TYPE_DOUBLES;
    }

    public String genderConverter(String engGender) {
        if (engGender.equals("MALE")) {
            return "남성";
        } else if (engGender.equals("FEMALE")) {
            return "여성";
        }
        return "";
    }
}
