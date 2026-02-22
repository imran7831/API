import React, { useState } from "react";

const Search = ({ setProducts }) => {

  const [query, setQuery] = useState("");

  const handleSearch = async () => {

    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const filtered = data.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setProducts(filtered);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

    </div>
  );
};

export default Search;