import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

interface Props {
  theme: string;
  onThemeChange: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const NavBar: React.FC<Props> = ({ theme, onThemeChange }) => {
  console.log("Theme: ", theme);
  return (
    <AppBar sx={{ color: theme === "dark" ? "white" : "white" }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <IconButton
          onClick={() => {
            onThemeChange((prevTheme) => {
              return prevTheme === "dark" ? "light" : "dark";
            });
          }}
        >
          {theme === "dark" ? (
            <DarkMode />
          ) : (
            <LightMode sx={{ color: "yellow" }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
