import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { updateBooks } from "./bookSlice";

export const EditBooks = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const id = state.id;
    dispatch(updateBooks({ id, name, author }));
    navigate("/show-books");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <form onSubmit={handleUpdate}>
        <label className="font-medium ">Book Name</label> <br />
        <input
          className="border p-2"
          type="text"
          placeholder="Enter book name"
          name="name"
          defaultValue={state?.name}
        />
        <br />
        <div className="mt-2"></div>
        <label className="font-medium ">Author Name</label> <br />
        <input
          className="border p-2"
          type="text"
          placeholder="Enter book name"
          name="author"
          defaultValue={state?.author}
        />
        <button className="border-2 mt-2 hover:bg-gray-500 hover:text-white py-2 px-4 block">
          Add button
        </button>
      </form>
    </div>
  );
};
