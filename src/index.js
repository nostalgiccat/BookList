import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology of Money",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: "Charles Duhigg",
    title:
      "Supercommunicators: How to Unlock the Secret Language of Connection",
    img: "./images/book-2.jpg",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

//Individual book component
const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display text</button>
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
