import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
  };
  const editBooksById = (id, newTitle) => {
    const editBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(editBooks);
  };
  const deleteBookById = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deleteBook);
  };
  return (
    <div className="app">
      <BookList
        onEdit={editBooksById}
        books={books}
        onDelete={deleteBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
