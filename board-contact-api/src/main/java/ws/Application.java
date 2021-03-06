package ws;

import domain.Address;
import domain.Contact;
import domain.SchoolBoard;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.*;

@SpringBootApplication
public class Application {

    public static Map<Integer, SchoolBoard> boardsMap = new HashMap<Integer, SchoolBoard>();
    public static Map<Integer, List<Contact>> boardToContactsMap = new HashMap<Integer, List<Contact>>();

    private static int id = 0;

    public static int getNewId() {
        id++;
        return id;
    }

    public static void startUp() {
        // Addresses
        Address address1 = new Address(1, "1255 Younge St", "Toronto", "L8T0E2");
        Address address2 = new Address(2, "4112 Random St", "Toronto", "XUE0E5");
        Address address3 = new Address(1, "7781 Shido St", "Milton", "IRT0E3");


        // Create school boards
        SchoolBoard schoolBoard1 = new SchoolBoard(1, "Halton District", true, "2012-01-01", null, "Sam", address1, "www.HaltonDistrict.com", "6073332222","12:00", "12:00");
        SchoolBoard schoolBoard2 = new SchoolBoard(2, "Catholic District School Board", true, "1990-10-05", null, "Catty", address2, "", "9056662233","12:00", "12:00");
        SchoolBoard schoolBoard3 = new SchoolBoard(3, "Allson School Board", false, "1802-12-01", "2015-02-02", "Sam", address3, "www.Allson.com", "9013341122","12:00", "12:00");

        boardsMap.put(schoolBoard1.getBoardNumber(), schoolBoard1);
        boardsMap.put(schoolBoard2.getBoardNumber(), schoolBoard2);
        boardsMap.put(schoolBoard3.getBoardNumber(), schoolBoard3);

        // Create contacts for each school board

        Contact contact1ForBoard1 = new Contact(getNewId(), 1, "Mr.", "Tom", "Jerry", "Tom@Jerry.com", "Jr Accountant", address1, "5552229999", true);
        Contact contact2ForBoard1 = new Contact(getNewId(), 1, "Mr.", "Luke", "Foo", "LukeFoo@hotmail.com", "Teacher", address1, "4441119999", false);
        Contact contact3ForBoard1 = new Contact(getNewId(), 1, "Ms.", "Cat", "Jul", "Cal@Jul.com", "Manager", address1, "6511234444", false);

        Contact contact1ForBoard2 = new Contact(getNewId(), 2, "Mr.", "Ash", "Catchem", "Gotem@all.com", "Pokemon Trainer", address2, "9993214545", true);
        Contact contact2ForBoard2 = new Contact(getNewId(), 2, "Mr.", "Uch", "Ahh", "Uchahh@gmail.com", "Fake Teacher", address2, "7773331111", false);
        Contact contact3ForBoard2 = new Contact(getNewId(), 2, "Dr.", "John", "Son", "John@Son.com", "Doctor", address2, "4561248844", false);

        Contact contact1ForBoard3 = new Contact(getNewId(), 3, "Mrs.", "Julie", "Yu", "Julie@Yu.com", "Teacher", address3, "5516763321", true);
        Contact contact2ForBoard3 = new Contact(getNewId(), 3, "Mr.", "Goku", "Son", "Goku@hotmail.com", "Gym Teacher", address3, "8185552121", false);
        Contact contact3ForBoard3 = new Contact(getNewId(), 3, "Mr.", "Pico", "Oky", "Pico@Oky.com", "Random Dude", address3, "8914446666", false);

        boardToContactsMap.put(1, new ArrayList<Contact>(Arrays.asList(contact1ForBoard1, contact2ForBoard1, contact3ForBoard1)));
        boardToContactsMap.put(2, new ArrayList<Contact>(Arrays.asList(contact1ForBoard2, contact2ForBoard2, contact3ForBoard2)));
        boardToContactsMap.put(3, new ArrayList<Contact>(Arrays.asList(contact1ForBoard3, contact2ForBoard3, contact3ForBoard3)));
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        startUp();
    }

}
