package domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Employer {

    private int boardNumber;
    private String boardName;
    private boolean isActive;
    private Integer openDate;
    private Integer closeDate;
    private String accountOwner;
    private Address address;
    private String phoneNumber;
    private String openTime;
    private String closeTime;
}
