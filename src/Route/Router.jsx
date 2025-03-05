import { Route, Routes } from "react-router";
import { MainLayout } from "../MainLayout/MainLayout";
import { AddBooks } from "../features/books/AddBooks";
import { BooksView } from "../features/books/BooksView";
import { Home } from "../Component/Home";
import { EditBooks } from "../features/books/EditBooks";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* child */}
        <Route index element={<Home />} />
        <Route path="add-books" element={<AddBooks />} />
        <Route path="show-books" element={<BooksView />} />
        <Route path="edit-books" element={<EditBooks />} />
      </Route>
    </Routes>
  );
};
