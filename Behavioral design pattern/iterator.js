class BookCollection {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    *[Symbol.iterator]() {
        for (const book of this.books) {
        yield book;
        }
    }
    }

    const collection = new BookCollection();
    collection.addBook('Book 1');
    collection.addBook('Book 2');
    collection.addBook('Book 3');

    for (const book of collection) {
    console.log(book);
    }
