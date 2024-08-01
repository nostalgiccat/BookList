import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/book-1.jpg",
  },
  {
    author: "Charles Duhigg",
    title:
      "Supercommunicators: How to Unlock the Secret Language of Connection",
    img: "./images/book-2.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, author, title } = book; //Deconstruction
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BookList />
  </>
);
