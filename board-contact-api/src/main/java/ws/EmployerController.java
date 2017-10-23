package ws;

import domain.Employer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployerController {

    @CrossOrigin
    @RequestMapping(path = "/employer/{boardNumber}", method = RequestMethod.GET)
    public ResponseEntity getEmployer(@PathVariable int boardNumber) {

        Employer employer = Application.employersMap.get(boardNumber);

        return new ResponseEntity(employer, HttpStatus.OK);
    }
}
