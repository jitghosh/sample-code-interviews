# Book Store Rest API Example

Implement a REST Service for a bookstore. It should be possible to:

- add a book
- retrieve a book by ISBN number
- get all books

The value is of type Book and should have: Title, Author, ISBN number.

Use a layered approach where there is an API controller, service and a store. The implementation of the store should be generic and you want a simple implementation in memory, but eventually, we should be able to swap it out with a real store (Relational DB or no SQL store).

## Instructions

Implement the Add, Get and GetAll methods.
