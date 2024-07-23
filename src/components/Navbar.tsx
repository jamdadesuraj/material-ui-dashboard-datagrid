import {
  Apps,
  Close,
  Fullscreen,
  Notifications,
  Search as SearchIcon,
  Settings,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Popover,
  styled,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileSideBar from "./MobileSideBar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledToolbarMobile = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const StyledIconMobile = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "1px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1px",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface SidebarProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const Navbar = ({ mode, setMode }: SidebarProps) => {
  const [open, setOpen] = useState(false);
  const [notificatioOpen, setNotificatioOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMobileOpen, setDrawerMobileOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseNotification = () => {
    setNotificatioOpen(false);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCloseMobileDrawer = () => {
    setDrawerMobileOpen(false);
  };

  return (
    <AppBar sx={{ boxShadow: "none" }} position="sticky">
      {/* ============================desktop================================================== */}

      <StyledToolbar>
        <Typography variant="h6">LOGO</Typography>
        <StyledIcon>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error">
              <Apps />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error">
              <Fullscreen />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <Badge
              badgeContent={4}
              color="error"
              onClick={() => setNotificatioOpen(true)}
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setOpen(true)}>
              <Avatar
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                sx={{ width: 30, height: 30 }}
              />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setDrawerOpen(true)}>
              <Settings />
            </Badge>
          </IconButton>
        </StyledIcon>
      </StyledToolbar>

      {/* ============================mobile================================================== */}
      <StyledToolbarMobile>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setDrawerMobileOpen(true)}>
              <MenuIcon />
            </Badge>
          </IconButton>
          <Typography variant="h6">LOGO</Typography>
        </Box>
        <StyledIconMobile>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setSearchOpen(true)}>
              <SearchIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge
              badgeContent={4}
              color="error"
              onClick={() => setNotificatioOpen(true)}
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setOpen(true)}>
              <Avatar
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                sx={{ width: 30, height: 30 }}
              />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Badge color="error" onClick={() => setDrawerOpen(true)}>
              <Settings />
            </Badge>
          </IconButton>
        </StyledIconMobile>
      </StyledToolbarMobile>

      {/* ============================profile================================================== */}

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ top: "40px" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/my-account">My Account</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/login">Login</Link>
        </MenuItem>
      </Menu>

      {/* ============================notification================================================== */}

      <Popover
        open={notificatioOpen}
        onClose={handleCloseNotification}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ top: "50px" }}
      >
        <Typography sx={{ p: 2 }}>New Notification</Typography>
      </Popover>

      {/* ============================search================================================== */}
      <StyledModel
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: 400 }}
          p={5}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
            color={"gray"}
            mb={3}
          >
            Search Movie
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>
      </StyledModel>

      {/* ================================drawer========================================================= */}
      <Drawer
        sx={{
          width: "300px",
          flexShrink: 0,
        }}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
      >
        <DrawerHeader>
          <IconButton onClick={handleCloseDrawer}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Switch
                  size="small"
                  onChange={() => {
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                  checked={mode === "dark"}
                />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <MobileSideBar
        handleCloseMobileDrawer={handleCloseMobileDrawer}
        drawerMobileOpen={drawerMobileOpen}
      />

      {/* ================================sidebar drawer========================================================= */}
    </AppBar>
  );
};

export default Navbar;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
