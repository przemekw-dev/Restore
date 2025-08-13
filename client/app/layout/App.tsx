import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import Catalog from "../components/catalog/Catalog";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar/NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((er) => console.error("Error: ", er));
  }, []);

  // const palleteType = theme ? "dark" : "light";

  const appTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",
      background: {
        default: theme === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  console.log("Products", products);
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <NavBar theme={theme} onThemeChange={setTheme} />

      <Box
        sx={{
          minHeight: "100vh",
          background: theme === "dark" ? "#121212" : "#eaeaea",
        }}
      >
        <Container sx={{ mt: 16 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
