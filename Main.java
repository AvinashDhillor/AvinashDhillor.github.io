import java.util.ArrayList;
import java.util.List;

/**
 * Main
 */
public class Main {

    static class Customer {
        String name;

        Customer(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {

        List<Customer> customers = new ArrayList<>();

        while (true) {
            Customer c = new Customer("Matt");
            customers.add(c);

            if (customers.size() > 100) {
                for (int i = 0; i < 10; i++) {
                    customers.remove(0);
                }
            }
        }
    }
}