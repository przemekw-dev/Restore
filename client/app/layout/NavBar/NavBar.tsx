import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const midLinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "gray.500",
  },
  "&.active": {
    color: "#baecf9",
  },
};

interface Props {
  theme: string;
  onThemeChange: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const NavBar: React.FC<Props> = ({ theme, onThemeChange }) => {
  console.log("Theme: ", theme);
  return (
    <AppBar sx={{ color: theme === "dark" ? "white" : "white" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
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
        </Box>
        <Box>
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />{" "}
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
