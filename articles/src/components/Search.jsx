import React, { useState } from "react";

export default function SearchForm({ search, articles, articleFilter }) {
  
  const [results, setResults] = useState("");

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (results) {
      let filtered = articles.filter(el => {
        if (el.title.toLowerCase().indexOf(results.toLowerCase()) !== -1) {
          return el;
        } else {
          console.error("que dijiste de mi mama pendejo?");
        }
      });

      if (filtered.length == 0) {
        search(articles);
      } else {
        search(filtered);
      }
    } else {
      search(articles);
    }
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="styled-input"
        />
      </form>
    </section>
  );
}
