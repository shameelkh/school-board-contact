package domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Contact {

    private int id;
    private int boardNumber;
    private String salutation;
    private String firstName;
    private String lastName;
    private String email;
    private String title;
    private Address address;
    private String phoneNumber;
    private boolean isPrimary;
}
