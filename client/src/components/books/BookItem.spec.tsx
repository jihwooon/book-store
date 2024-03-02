import React from "react";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";
import BookItem from "./BookItem";
import { formatNumber } from "../../utils/format";

const dummayBook: Book = {
  id: 2,
  title: "신델렐라",
  imgId: 0,
  categoryId: 2,
  form: "종이책",
  isbn: "1",
  summary: "유리구두...",
  detail: "투명한 유리구두",
  author: "걍구두",
  pages: 100,
  contents: "목차",
  price: 20000,
  likes: 0,
  pubDate: "2024-01-01",
};

describe("BookItem", () => {
  it("render BookValue", () => {
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummayBook} />
      </BookStoreThemeProvider>,
    );

    expect(screen.getByText(dummayBook.title)).toBeInTheDocument();

    expect(screen.getByText(dummayBook.summary)).toBeInTheDocument();

    expect(screen.getByText(dummayBook.author)).toBeInTheDocument();

    expect(screen.getByText("20,000원")).toBeInTheDocument();

    expect(screen.getByText(dummayBook.likes)).toBeInTheDocument();

    expect(screen.getByAltText(dummayBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummayBook.imgId}/600/600`,
    );
  });
});
