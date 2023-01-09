import { render } from '@testing-library/react'
import ProductCard from '../components/ProductCard'


describe('Product cards', () => {
    it("renders the location cards", async () => {
        const mockData = [
            {
                "id": 1,
                "src": "https://hmperu.vtexassets.com/arquivos/ids/3205644/Polo-con-escote-en-V-Slim-Fit---Negro---H-M-PE.jpg?v=638050529306000000",
                "name": "Polo Oversized",
                "price": 12.23,
                "hasDifferentColors": false
            }
        ];
      
        const { findAllByTestId } = render(
            <ProductCard {...mockData[0]} />
        );
      
        const productsList = await findAllByTestId("product-list");
      
        expect(productsList).toHaveLength(1);
      });
  })