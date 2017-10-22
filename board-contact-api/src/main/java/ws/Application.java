package ws;

import domain.Contact;
import domain.Employer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.*;

@SpringBootApplication
public class Application {

    public static Map<Integer, Employer> employersMap = new HashMap<Integer, Employer>();
    public static Map<Integer, List<Contact>> boardToContactsMap = new HashMap<Integer, List<Contact>>();

    public static void startUp() {
        // Create school boards
        Employer employer1 = new Employer(1, "Halton District", true);
        Employer employer2 = new Employer(2, "Catholic District School Board", true);
        Employer employer3 = new Employer(3, "Allson School Board", false);

        employersMap.put(employer1.getBoardNumber(), employer1);
        employersMap.put(employer2.getBoardNumber(), employer2);
        employersMap.put(employer3.getBoardNumber(), employer3);

        // Create contacts for each school board

        Contact contact1ForBoard1 = new Contact(1, 1, "Tom", "Jerry", "Tom@Jerry.com", true);
        Contact contact2ForBoard1 = new Contact(2, 1, "Sam", "Foo", "SamFoo@hotmail.com", false);
        Contact contact3ForBoard1 = new Contact(3, 1, "Cat", "Jul", "Cal@Jul.com", false);

        Contact contact1ForBoard2 = new Contact(4, 2, "Ash", "Catchem", "Gotem@all.com", true);
        Contact contact2ForBoard2 = new Contact(5, 2, "Uch", "Ahh", "Uchahh@gmail.com", false);
        Contact contact3ForBoard2 = new Contact(6, 2, "John", "Son", "John@Son.com", false);

        Contact contact1ForBoard3 = new Contact(7, 3, "Julie", "Yu", "Julie@Yu.com", true);
        Contact contact2ForBoard3 = new Contact(8, 3, "Goku", "Son", "Goku@hotmail.com", false);
        Contact contact3ForBoard3 = new Contact(9, 3, "Pico", "Oky", "Pico@Oky.com", false);

        boardToContactsMap.put(1, Arrays.asList(contact1ForBoard1, contact2ForBoard1, contact3ForBoard1));
        boardToContactsMap.put(2, Arrays.asList(contact1ForBoard2, contact2ForBoard2, contact3ForBoard2));
        boardToContactsMap.put(3, Arrays.asList(contact1ForBoard3, contact2ForBoard3, contact3ForBoard3));
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        startUp();
    }
}
