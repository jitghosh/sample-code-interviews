#define CATCH_CONFIG_MAIN
#include "catch.hpp"

class Book
{
    Book() {}
};

class BooksController
{
public:
    BooksController()
    {
    }

    void AddBook()
    {
        throw std::runtime_error("notimplemented");
    }

    void GetBook()
    {
        throw std::runtime_error("notimplemented");
    }

    void GetAllBooks()
    {
        throw std::runtime_error("notimplemented");
    }
};

TEST_CASE("Add Book")
{

    SECTION("Add Book Succeeds")
    {
        BooksController controller;
        REQUIRE_THROWS_WITH(controller.AddBook(), Catch::Matchers::Contains("notimplemented"));
    }
}
