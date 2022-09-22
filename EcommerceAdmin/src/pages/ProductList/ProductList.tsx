import React, { useState } from "react";
import {
  ProductListContainer,
  UserImage,
  UserDiv,
  UserName,
  UserButton,
  ActionIcon,
} from "./ProductList.Styles";
import { DataGrid, GridCellParams, GridColDef } from "@material-ui/data-grid";
import { Edit, Delete } from "@material-ui/icons";
import { products } from "common/data";
import { Link } from "react-router-dom";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";

type ProductListProps = {};

export const ProductList: React.FC<ProductListProps> = ({}) => {
  const [productRow, setProductRow] = useState(products);

  const handleDeleteProduct = (id: number) => {
    setProductRow(productRow.filter((x) => x.id !== id));
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      editable: true,
      renderCell: (params: GridCellParams) => {
        return (
          <UserDiv className="productListUser">
            <UserImage src={params.row.img} alt="" />
            <UserName>{params.row.name}</UserName>
          </UserDiv>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      //type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      //type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: GridCellParams) => {
        return (
          <UserButton>
            <Link to={"/product/" + params.row.id}>
              <ActionIcon>
                <Edit style={{ color: "green" }} />
              </ActionIcon>
            </Link>
            <ActionIcon onClick={() => handleDeleteProduct(params.row.id)}>
              <Delete style={{ color: "red" }} />
            </ActionIcon>
          </UserButton>
        );
      },
    },
  ];
  const crumbList: IPageBreadcrumb[] = [
    { to: "/products", title: "ProductList", isLast: true },    
  ];
  return (
    <ProductListContainer>      
      <PageBreadcrumb crumbsList={crumbList} />
      <DataGrid
        rows={productRow}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  );
};
