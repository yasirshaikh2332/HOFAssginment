document.addEventListener("DOMContentLoaded", function () {
    // Sample book data
    const books = [
        {"title": "Book 1", "author": "Author 1", "publication_year": 2008},
        {"title": "Book 2", "author": "Author 2", "publication_year": 2012},
        {"title": "Book 3", "author": "Author 3", "publication_year": 2015},
    ];

    // Filter and capitalize the books
    const filteredBooks = filterAndCapitalizeBooks(books);

    // Get the table element from the HTML
    const table = document.querySelector("table");

    // Create table rows for each book and populate the table
    filteredBooks.forEach(book => {
        const row = table.insertRow();
        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const yearCell = row.insertCell(2);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        yearCell.textContent = book.publication_year;
    });
});

function filterAndCapitalizeBooks(books) {
    // Filter and capitalize the books
    const filteredBooks = [];

    books.forEach(book => {
        if (book.publication_year >= 2010) {
            book.author = book.author.toUpperCase();
            filteredBooks.push(book);
        }
    });

    return filteredBooks;
}
