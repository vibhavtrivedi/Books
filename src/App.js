import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  // const fetchBooks = async () => {
  //   const response = axios.get("http://localhost:3001/books");
  //   setBooks(response.data);
  // };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const updateBooks = [...books, response.data];
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
      <h1>Reading List</h1>
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
