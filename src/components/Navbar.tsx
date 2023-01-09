import useProducts from 'hooks/useProducts';
import React from 'react';
import { NavbarFields } from 'utils/interfaces/NavbarFields';

const Navbar = ({ setProductsList, productsList, getData }: Partial<NavbarFields>) => {
  const filterProductsByName = (name: string) => {
    if (name !== '') {
      const filteredData = [...productsList].filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(name.toLowerCase());
      });
      setProductsList(filteredData);
      return;
    }
    getData()
  };

  return (
    <div className="d-flex mt-4 mb-3 justify-content-center align-items-center">
      <div>
        <input
          onChange={(e) => filterProductsByName(e.target.value)}
          className="form-control"
          type="text"
          data-testid='search-input'
        />
      </div>
      <div className="d-flex" data-testid='up-down-buttons-container'>
        <button className="btn btn-light mx-3" onClick={() => document.body.style.zoom = "100%" as any}>+</button>
        <button className="btn btn-light" onClick={() => document.body.style.zoom = "60%" as any}>-</button>
      </div>
    </div>
  );
};

export default Navbar;
