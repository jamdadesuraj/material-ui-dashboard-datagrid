import { Close } from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
  IconButton,
  Divider,
  ListItem,
} from "@mui/material";

import styled from "styled-components";
import { menu } from "../data";
import { Link } from "react-router-dom";

const StyledListItem = styled(ListItem)({});

interface SidebarProps {
  drawerMobileOpen: boolean;
  handleCloseMobileDrawer: () => void;
}

const MobileSideBar = ({
  drawerMobileOpen,
  handleCloseMobileDrawer,
}: SidebarProps) => {
  return (
    <Drawer
      sx={{
        width: "500px",
        flexShrink: 0,
      }}
      variant="persistent"
      anchor="left"
      open={drawerMobileOpen}
    >
      <Box>
        <IconButton onClick={handleCloseMobileDrawer}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menu.map((item) => (
          <StyledListItem key={item.id}>
            <Box sx={{ width: "100%" }}>
              <Typography>{item.title}</Typography>
              {item.listItems.map((listItem) => (
                <Link
                  to={listItem.url}
                  key={listItem.id}
                  onClick={handleCloseMobileDrawer}
                >
                  <ListItemButton sx={{ display: "flex", gap: "10px" }}>
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
    </Drawer>
  );
};

export default MobileSideBar;
