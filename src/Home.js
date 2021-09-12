import React from "react";
import Movies from "./Movies";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
