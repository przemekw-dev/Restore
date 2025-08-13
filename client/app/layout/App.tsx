import { useState } from "react";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const appTheme = createTheme({
    palette: {
      mode: theme === "dark" ? "dark" : "light",
      background: {
        default: theme === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

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
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
