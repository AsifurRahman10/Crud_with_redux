import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div>
      <ul className="flex py-6 justify-center items-center gap-6 text-xl font-semibold bg-amber-100">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/show-books"}>
          <li>Show Books</li>
        </Link>
        <Link to={"/add-books"}>
          <li>Add Books</li>
        </Link>
      </ul>
    </div>
  );
};
