package domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Employer {

    private int boardNumber;
    private String boardName;
    private boolean isActive;
}
