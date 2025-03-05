import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router";

export const BooksView = () => {
  const { books } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-2xl font-medium">List of books</h2>
      {/* table */}
      <section className="mt-10">
        <table className="w-full border border-gray-300 shadow-md overflow-hidden">
          <thead className="bg-gray-300 text-gray-700 uppercase text-lg">
            <tr className="">
              {/* <th className="px-4 py-2 border border-black">ID</th> */}
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Author</th>
              <th className="px-4 py-2 border border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <tr key={book.id}>
                  {/* <td className="px-4 py-2 border border-gray-300">
                    {book.id}
                  </td> */}
                  <td className="px-4 py-2 border border-gray-300">
                    {book.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {book.author}
                  </td>
                  <td className="px-4 py-2 border space-y-3 space-x-3 border-gray-300">
                    <Link to={"/edit-books"} state={book}>
                      <button className="bg-black hover:bg-red-300  text-white font-medium rounded-xl w-[80px] py-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="bg-black hover:bg-red-300  text-white font-medium rounded-xl w-[80px] py-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
