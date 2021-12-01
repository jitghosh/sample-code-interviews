interface Book {
  id: number;
  title: string;
}

const notImpelemented = "Not implemented";

// Simple REST API support functions
const bookController = {
  addBook: () => {
    throw Error(notImpelemented);
  },
  getBook: () => {
    throw Error(notImpelemented);
  },
  getAllBooks: () => {
    throw Error(notImpelemented);
  },
};

test("throws an error", () => {
  expect(() => {
    bookController.getAllBooks();
  }).toThrowError(notImpelemented);
});

export {}; // forces TS to treat this file as a module
