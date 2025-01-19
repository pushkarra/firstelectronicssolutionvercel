import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, image, typeo, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
      <span className="category-tag">{typeo}</span>
        <figure>
          <img src={image} alt={name} />
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="subcategory">{category}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;