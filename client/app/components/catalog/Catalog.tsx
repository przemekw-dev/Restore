import type { Product } from "../../types/product";
import ProductList from "./ProductList";

interface CatalogProps {
  products: Product[];
}

const Catalog: React.FC<CatalogProps> = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
export default Catalog;
