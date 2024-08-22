class Genre {
    constructor(name) {
      this.name = name; // Shared state
    }
  
    showBooks(books) {
      console.log(`Genre: ${this.name}`);
      books.forEach(book => console.log(`  Book: ${book}`));
    }
  }
  
  class GenreFactory {
    constructor() {
      this.genres = {};
    }
  
    getGenre(name) {
      if (!this.genres[name]) {
        this.genres[name] = new Genre(name);
      }
      return this.genres[name];
    }
  }
  
const factory = new GenreFactory();

const booksByGenre = [
  { genre: 'Science Fiction', books: ['Dune', 'Neuromancer'] },
  { genre: 'Fantasy', books: ['The Hobbit', 'Harry Potter'] },
  { genre: 'Science Fiction', books: ['Foundation', 'Ender\'s Game'] },
  { genre: 'Mystery', books: ['Sherlock Holmes', 'Gone Girl'] }
];

booksByGenre.forEach(({ genre, books }) => {
  const genreFlyweight = factory.getGenre(genre);
  genreFlyweight.showBooks(books);
});
