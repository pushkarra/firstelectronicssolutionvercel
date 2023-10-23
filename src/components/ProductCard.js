import React from 'react';
import { NavLink } from "react-router-dom";


const ProductCard = ({ product }) => {


  return (
    <NavLink to={`/singleproduct/${product.id}`}>
      <div className="card">
        <figure>
          <img src={product.imageUrl} alt={product.name} />
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{product.name}</h3>
          </div>
        </div>
      </div>
    
    </NavLink>
    
  );
};

export default ProductCard;
