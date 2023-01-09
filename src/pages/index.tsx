import ProductCard from 'components/ProductCard';
import useProducts from 'hooks/useProducts';
import { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'components/Navbar';
import { Fragment } from 'react';
import Filters from 'components/Filters';

const HomePage: NextPage = () => {
  const { productsList, setProductsList, getData } = useProducts();

  return (
    <div className='container'>
      <Navbar setProductsList={setProductsList} productsList={productsList} getData={getData} />
      <Filters setProductsList={setProductsList} productsList={productsList} getData={getData} />
      <div className="row justify-content-center">
        {productsList?.map(({ hasDifferentColors, id, src, name, price, oldPrice }) => (
          <Fragment key={id}>
            <ProductCard
              id={id}
              hasDifferentColors={hasDifferentColors}
              src={src}
              name={name}
              price={price}
              oldPrice={oldPrice}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
