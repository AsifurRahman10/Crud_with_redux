import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./bookSlice";
import { useNavigate } from "react-router";

export const AddBooks = () => {
  const bookLength = useSelector((state) => state.bookReducer.books.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const newBook = { id: bookLength + 1, name, author };
    dispatch(addBooks(newBook));
    navigate("/show-books");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <form onSubmit={handleSubmit}>
        <label className="font-medium ">Book Name</label> <br />
        <input
          className="border p-2"
          type="text"
          placeholder="Enter book name"
          name="name"
        />
        <br />
        <div className="mt-2"></div>
        <label className="font-medium ">Author Name</label> <br />
        <input
          className="border p-2"
          type="text"
          placeholder="Enter book name"
          name="author"
        />
        <button className="border-2 mt-2 hover:bg-gray-500 hover:text-white py-2 px-4 block">
          Add button
        </button>
      </form>
    </div>
  );
};
