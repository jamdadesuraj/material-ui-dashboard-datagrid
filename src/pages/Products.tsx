import { Box, Typography } from "@mui/material";
import UserDataTable from "../components/UserData";
import { products } from "../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png"}
        alt=""
        style={{ width: 30, height: 30, borderRadius: "50%" }}
      />
    ),
  },
  { field: "title", headerName: "title", width: 230 },
  { field: "color", headerName: " color", width: 130 },
  { field: "producer", headerName: "producer", width: 130 },
  { field: "price", headerName: "price", width: 130 },
  { field: "createdAt", headerName: "createdAt", width: 100 },
  { field: "inStock", headerName: "inStock", width: 100, type: "boolean" },
];

const Products = () => {
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ width: "100%", height: "100vh" }}
    >
      <Typography variant="h6" mt={4} mb={4}>
        Products List
      </Typography>
      <UserDataTable columns={columns} rows={products} slug={""} />
    </Box>
  );
};

export default Products;
