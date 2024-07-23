import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" align="center" pb={2}>
        {"Copyright © "}
        <a color="inherit" href="https://mui.com/">
          Your Website
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
