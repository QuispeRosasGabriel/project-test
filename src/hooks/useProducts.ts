import React from 'react';
import { PRODUCTS_DB } from 'utils/constants';
import { ProductCardFields } from 'utils/interfaces/ProductCardFields';

const useProducts = () => {
  const [productsList, setProductsList] = React.useState<Array<ProductCardFields>>([]);

  const getData = async () => {
    try {
      const data = await fetch(PRODUCTS_DB);
      const transformedData = await data.json();
      setProductsList(transformedData?.data || []);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return {
    productsList,
    setProductsList,
    getData,
  };
};

export default useProducts;
