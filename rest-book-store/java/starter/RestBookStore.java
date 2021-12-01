import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

class BooksController {

    public void addBook() {
        throw new UnsupportedOperationException();
    }

    public void getBook() {
        throw new UnsupportedOperationException();
    }

    public void getAllBooks() {
        throw new UnsupportedOperationException();
    }

}

public class RestBookStore {

    @Rule
    public ExpectedException exception = ExpectedException.none();

    @Test
    public void Test1() {
        var controller = new BooksController();

        exception.expect(UnsupportedOperationException.class);
        controller.addBook();
    }

}