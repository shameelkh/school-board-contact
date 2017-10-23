package ws;

import domain.Contact;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactsController {

    @CrossOrigin
    @RequestMapping(value = "/contacts/{boardNumber}", method = RequestMethod.GET)
    public ResponseEntity getContacts(@PathVariable int boardNumber) {
        List<Contact> contactsForBoard = Application.boardToContactsMap.get(boardNumber);

        return new ResponseEntity(contactsForBoard, HttpStatus.OK);
    }
}
