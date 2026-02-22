import React from "react";

const Card = ({ product }) => {

  return (
    <div className="card">

      <img src={product.image} width="150" />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <p>{product.category}</p>

    </div>
  );

};

export default Card;