const sortBooksElement = document.getElementById('btnOrdenarPorPreco');

sortBooksElement.addEventListener('click', sortElements);

function sortElements() {
  const sortedBooks = books.sort((book1, book2) => book1.preco - book2.preco);
  createBooksElements(sortedBooks);
}