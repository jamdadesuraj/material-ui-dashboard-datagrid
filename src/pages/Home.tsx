import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  HomeChartBox,
  LeadsChart,
  ProfitChart,
  RevenueChart,
  TotalVistChart,
} from "./HomeChartBox";

const Home = () => {
  return (
    <Box sx={{}} mt={5} mb={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Top Deals
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Brunch this weekend?" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Summer BBQ" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Oui Oui" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Total Visit
              </Typography>
              <TotalVistChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
            <ListItem style={{ padding: 0, height: "100%" }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src="/home.svg"
                        alt="img"
                        style={{ width: "20px" }}
                      />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Total Users
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      11238
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      <HomeChartBox />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="text" size="small">
                      View All
                    </Button>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <span
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        45%
                      </span>{" "}
                      <br /> in this month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem style={{ padding: 0, height: "100%" }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src="/note.svg"
                        alt="img"
                        style={{ width: "20px" }}
                      />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Total Revenue
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Chart
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      $238
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      <HomeChartBox />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="text" size="small">
                      View All
                    </Button>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        -12%
                      </span>{" "}
                      <br /> in this month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
            <ListItem style={{ padding: 0, height: "100%" }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src="/note.svg"
                        alt="img"
                        style={{ width: "20px" }}
                      />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Total Products
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Chart
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      238
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      <HomeChartBox />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="text" size="small">
                      View All
                    </Button>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <span
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        25%
                      </span>{" "}
                      <br /> in this month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem style={{ padding: 0, height: "100%" }}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src="/backup.svg"
                        alt="img"
                        style={{ width: "20px" }}
                      />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Total Ratio
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Chart
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      2.8
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      mt={3}
                      mb={3}
                    >
                      <HomeChartBox />
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="text" size="small">
                      View All
                    </Button>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        12%
                      </span>{" "}
                      <br /> in this month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
          </Stack>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Revenue Analytics
              </Typography>
              <RevenueChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} rowSpacing={1}>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Leads By Source
              </Typography>
              <LeadsChart />
            </CardContent>
          </Card>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div" mb={3}>
                Profit Earned
              </Typography>
              <ProfitChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
