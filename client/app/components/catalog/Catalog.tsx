import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((er) => console.error("Error: ", er));
  }, []);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
export default Catalog;
