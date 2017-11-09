package domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class SchoolBoard {

    private int boardNumber;
    private String boardName;
    private boolean isActive;
    private String openDate;
    private String closeDate;
    private String accountOwner;
    private Address address;
    private String website;
    private String phoneNumber;
    private String openTime;
    private String closeTime;
}
