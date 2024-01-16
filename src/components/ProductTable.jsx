import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridActionsCellItem } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import IconButton from "@mui/material/IconButton";
import useStockCalls from "../service/useStockCalls";

export default function ProductTable() {
  const { deleteStock } = useStockCalls();
  const { products } = useSelector((state) => state.stock);

  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      minWidth:"100px",
      // valueGetter: (params) => params.value.slice(-1),
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => {
        console.log(params);
        return params.row.categoryId.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.brandId?.name ?? "Ülker",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock ",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      flex: 1,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", params.id)}
          label="Delete"
        />,
      ],
    },

    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   description: "Bu sütunun bir değer alıcısı vardır ve sıralanamaz.",
    //   sortable: false,
    //   flex: 1,
    //   headerAlign: "center",
    //   align: "center",
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    //   renderCell: (params) => (
    //     <IconButton
    //       aria-label="delete"
    //       onClick={() => deleteStock("products",params.id)}
    //     >
    //       <DeleteForeverIcon />
    //     </IconButton>
    //   ),
    // },
  ];

  const getRowId = (row) => row._id;

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,15,20]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
