import { Box, Typography } from "@mui/material";
import UserDataTable from "../components/UserData";
import { userRows } from "../data";
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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
  { field: "createdAt", headerName: "createdAt", width: 100 },
  { field: "status", headerName: "Status", width: 100, type: "boolean" },
];

const Users = () => {
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ width: "100%", height: "100vh" }}
    >
      <Typography variant="h6" mt={4} mb={4}>
        Users List
      </Typography>
      <UserDataTable columns={columns} rows={userRows} slug={""} />
    </Box>
  );
};

export default Users;
