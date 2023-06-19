let books = [];
const api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function getBooks() {
  const res = await fetch(api);
  books = await res.json();
  const discountBooks = applyDiscount(books);

  createBooksElements(discountBooks);
}

getBooks();