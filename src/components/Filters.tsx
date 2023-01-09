import React from 'react';

const Filters = ({ setProductsList, productsList, getData }: any) => {
  const orderByPrice = (order: string) => {
    if (order !== '') {
      const filteredData = [...productsList].sort((a, b) =>
        order === 'up' ? b.price - a.price : a.price - b.price,
      );
      console.log(filteredData);
      setProductsList(filteredData);
      return;
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="mx-2">Ordenar por precio</div>
      <div
        data-testid="up"
        style={{ cursor: 'pointer' }}
        className="mx-2 cursor-pointer"
        onClick={() => orderByPrice('up')}
      >
        ⬆
      </div>
      <div
        data-testid="down"
        className="mx-2"
        style={{ cursor: 'pointer' }}
        onClick={() => orderByPrice('down')}
      >
        ⬇
      </div>
    </div>
  );
};

export default Filters;
