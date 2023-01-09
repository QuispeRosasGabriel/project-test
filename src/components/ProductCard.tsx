import React from 'react';
import Image from 'next/image';
import { ProductCardFields } from 'utils/interfaces/ProductCardFields';

const ProductCard = ({ id, src = '', name, price, hasDifferentColors, oldPrice }: ProductCardFields) => {
  return (
      <div className="card m-3" style={{ width: '18rem' }} data-testid="product-list">
        <Image src={src} className="card-img-top" alt={name} width={400} height={450} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p style={{textDecoration: 'line-through'}} className="card-text">{oldPrice && `$${oldPrice}`}</p>
          <p className="card-text text-danger">${price}{oldPrice && "(-20%)"}</p>
          <p className="card-text">{hasDifferentColors && 'más colores'}</p>
          <a href="#" className="btn btn-primary">
            AÑADIR
          </a>
        </div>
      </div>
  );
};

export default ProductCard;
