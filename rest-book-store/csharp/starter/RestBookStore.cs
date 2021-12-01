using System;
using System.Collections.Generic;
using Xunit;

namespace RestBookStore
{
    public class Book
    {
        Book()
        { }
    }

    /// <summary>
    /// Path: /api/books
    /// </summary>
    public class BooksController
    {

        public void AddBook()
        {
            throw new NotImplementedException();
        }

        public void GetBook()
        {
            throw new NotImplementedException();
        }

        public void GetAllBooks()
        {
            throw new NotImplementedException();
        }
    }

    public class SampleSingleFile
    {
        [Fact]
        public void Test1()
        {
            var controller = new BooksController();

            Assert.Throws<NotImplementedException>(() => controller.GetAllBooks());
        }
    }
}
