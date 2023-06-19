const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', filterBooks);
});

function filterBooks() {
  const btnElement = document.getElementById(this.id);
  const category = btnElement.value;

  const filteredBooks = category == 'disponivel'
    ? filterByAvailability()
    : filterByCategory(category);

  createBooksElements(filteredBooks);

  if (category == 'disponivel') {
    const totalValue = getAvailableBooksTotalValue(filteredBooks);
    showTotalValueAvailableBooks(totalValue);
  }
}

function filterByCategory(category) {
  return books.filter(book => book.categoria == category);
}

function filterByAvailability() {
  return books.filter(book => book.quantidade > 0);
}

function showTotalValueAvailableBooks(totalValue) {
  totalValueAvailableBooksElement.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}