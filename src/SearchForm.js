import React from "react";
import { useGlobalContext } from "./context";
import "./SearchForm.css";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <section className="search-form">
      <h2>Search Movies</h2>
      <form>
        <input
          type="text"
          placeholder="enter movie name"
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="error-text">{error.show ? error.msg : ''}</p>
      </form>
    </section>
  );
};

export default SearchForm;
