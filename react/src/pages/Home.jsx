import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {

      setLoading(true);

      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();

      setProducts(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>

      <h1>API Hunter</h1>

      <Search setProducts={setProducts} />

      {loading && <Loader />}

      {error && <p>{error}</p>}

      <div className="grid">

        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
};

export default Home;