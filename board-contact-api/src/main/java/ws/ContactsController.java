package ws;

import domain.Address;
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

    @CrossOrigin
    @RequestMapping(value = "/contact", method = RequestMethod.POST)
    public ResponseEntity saveContact(@RequestBody Contact updatedContact) {
        List<Contact> contactsForBoard = Application.boardToContactsMap.get(updatedContact.getBoardNumber());

        for(int index = 0; index < contactsForBoard.size(); index++) {
            Contact contact = contactsForBoard.get(index);

            if(contact.getId() == updatedContact.getId()) {
                copyUpdatedContact(contact, updatedContact);
                break;
            }
        }

        return new ResponseEntity(updatedContact, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/add/contact", method = RequestMethod.POST)
    public ResponseEntity addContact(@RequestBody Contact newContact) {
        int newContactId = Application.getNewId();
        newContact.setId(newContactId);

        List<Contact> listOfBoardContacts = Application.boardToContactsMap.get(newContact.getBoardNumber());
        listOfBoardContacts.add(newContact);

        return new ResponseEntity(newContact, HttpStatus.OK);
    }

    private void copyUpdatedContact (Contact contact, Contact updatedContact) {
        contact.setBoardNumber(updatedContact.getBoardNumber());
        contact.setSalutation(updatedContact.getSalutation());
        contact.setFirstName(updatedContact.getFirstName());
        contact.setLastName(updatedContact.getLastName());
        contact.setEmail(updatedContact.getEmail());
        contact.setTitle(updatedContact.getTitle());
        contact.setAddress(updatedContact.getAddress());
        contact.setPhoneNumber(updatedContact.getPhoneNumber());
        contact.setPrimary(updatedContact.isPrimary());
    }
}
