import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export default function UserDataTable(props: Props) {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action" style={{ display: "flex", gap: "10px" }}>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete">
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        rows={props.rows}
        sx={{ padding: "10px" }}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
      />
    </div>
  );
}
