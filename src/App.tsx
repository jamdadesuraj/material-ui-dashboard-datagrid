import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { ThemeProvider, createTheme, Box, Grid } from "@mui/material";
import { useState } from "react";
import { theme as lightTheme } from "./theme"; // Assuming this is your light theme
import NotFound from "./components/NotFound";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const Layout = () => {
    return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Grid container spacing={2}>
          <Grid item xs={1} sm={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={11} sm={9}>
            <Outlet />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
