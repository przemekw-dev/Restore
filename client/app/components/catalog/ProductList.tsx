import { Box } from "@mui/material";
import type { Product } from "../../types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {products.map((product, inx) => {
        return <ProductCard key={inx} product={product} />;
      })}
    </Box>
  );
};
export default ProductList;
