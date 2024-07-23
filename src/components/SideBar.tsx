import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../data";
import styled from "styled-components";

const StyledListItem = styled(ListItem)({});

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="static" sx={{ borderRight: "1px solid #ccc" }}>
          <List>
            {menu.map((item) => (
              <StyledListItem key={item.id}>
                <Box sx={{ width: "100%" }}>
                  <Typography>{item.title}</Typography>
                  {item.listItems.map((listItem) => (
                    <Link to={listItem.url} key={listItem.id}>
                      <ListItemButton
                        sx={{
                          display: "flex",
                          gap: "10px",
                          backgroundColor:
                            location.pathname === listItem.url
                              ? "red"
                              : "transparent",
                        }}
                      >
                        <img
                          src={listItem.icon}
                          alt="icon"
                          style={{ width: "15px" }}
                        />
                        <ListItemText primary={listItem.title} />
                      </ListItemButton>
                    </Link>
                  ))}
                </Box>
              </StyledListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
