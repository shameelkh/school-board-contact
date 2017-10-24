package ws;

import domain.Address;
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
        // Addresses
        Address address1 = new Address(1, "1255 Younge St", "Toronto", "LUT0E3");
        Address address2 = new Address(2, "4112 Random St", "Toronto", "XUE0E5");
        Address address3 = new Address(1, "7781 Shido St", "Milton", "IRT0E3");


        // Create school boards
        Employer employer1 = new Employer(1, "Halton District", true, 20120101, null, "Sam", address1, "6073332222","12:00", "12:00");
        Employer employer2 = new Employer(2, "Catholic District School Board", true, 19901005, null, "Catty", address2, "9056662233","12:00", "12:00");
        Employer employer3 = new Employer(3, "Allson School Board", false, 18021201, 20150202, "Sam", address3, "9013341122","12:00", "12:00");

        employersMap.put(employer1.getBoardNumber(), employer1);
        employersMap.put(employer2.getBoardNumber(), employer2);
        employersMap.put(employer3.getBoardNumber(), employer3);

        // Create contacts for each school board

        Contact contact1ForBoard1 = new Contact(1, 1, "Mr.", "Tom", "Jerry", "Tom@Jerry.com", "Jr Accountant", address1, "5552229999", true);
        Contact contact2ForBoard1 = new Contact(2, 1, "Mr.", "Sam", "Foo", "SamFoo@hotmail.com", "Teacher", address1, "4441119999", false);
        Contact contact3ForBoard1 = new Contact(3, 1, "Ms.", "Cat", "Jul", "Cal@Jul.com", "Manager", address1, "6511234444", false);

        Contact contact1ForBoard2 = new Contact(4, 2, "Mr.", "Ash", "Catchem", "Gotem@all.com", "Pokemon Trainer", address2, "9993214545", true);
        Contact contact2ForBoard2 = new Contact(5, 2, "Mr.", "Uch", "Ahh", "Uchahh@gmail.com", "Fake Teacher", address2, "7773331111", false);
        Contact contact3ForBoard2 = new Contact(6, 2, "Dr.", "John", "Son", "John@Son.com", "Doctor", address2, "4561248844", false);

        Contact contact1ForBoard3 = new Contact(7, 3, "Mrs.", "Julie", "Yu", "Julie@Yu.com", "Teacher", address3, "5516763321", true);
        Contact contact2ForBoard3 = new Contact(8, 3, "Mr.", "Goku", "Son", "Goku@hotmail.com", "Gym Teacher", address3, "8185552121", false);
        Contact contact3ForBoard3 = new Contact(9, 3, "Mr.", "Pico", "Oky", "Pico@Oky.com", "Random Dude", address3, "8914446666", false);

        boardToContactsMap.put(1, Arrays.asList(contact1ForBoard1, contact2ForBoard1, contact3ForBoard1));
        boardToContactsMap.put(2, Arrays.asList(contact1ForBoard2, contact2ForBoard2, contact3ForBoard2));
        boardToContactsMap.put(3, Arrays.asList(contact1ForBoard3, contact2ForBoard3, contact3ForBoard3));
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        startUp();
    }
}
