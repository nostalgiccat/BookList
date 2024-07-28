import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/book-1.jpg" alt="The psychology of money" />
);

const Title = () => {
  return <h2>The Psychology of Money</h2>;
};

const Author = () => <h4>Morgan Housel</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BookList />
  </>
);
