import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState();
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onEdit={onEdit} book={book} />;
  }
  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
