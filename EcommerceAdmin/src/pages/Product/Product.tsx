import { Publish } from "@material-ui/icons";
import Chart from "components/Chart/Chart";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";
import React from "react";
import { Link } from "react-router-dom";
import {
  ProductAddButton,
  ProductBottom,
  ProductContainer,
  ProductForm,
  ProductFormImage,
  ProductFormInput,
  ProductFormLabel,
  ProductFormLeft,
  ProductFormRight,
  ProductFormSelect,
  ProductFormSelectOption,
  ProductFormSubmit,
  ProductFormUpload,
  ProductImage,
  ProductInfoBottom,
  ProductInfoItem,
  ProductInfoKey,
  ProductInfoTop,
  ProductInfoValue,
  ProductName,
  ProductTitle,
  ProductTitleContainer,
  ProductTop,
  ProductTopLeft,
  ProductTopRight,
} from "./Product.Styles";

type ProductProps = {};

export const Product: React.FC<ProductProps> = ({}) => {
  const data = [
    { name: "Jan", sales: 400 },
    { name: "Fav", sales: 200 },
    { name: "March", sales: 1000 },
    { name: "April", sales: 800 },
    { name: "May", sales: 2000 },
    { name: "Jun", sales: 700 },
    { name: "July", sales: 1500 },
    { name: "Aug", sales: 1700 },
  ];

  const crumbList: IPageBreadcrumb[] = [
    { to: "/products", title: "ProductList", isLast: false },     
    { to: "/product/1", title: "Product", isLast: true },
  ];
  return (
    <ProductContainer>
      <PageBreadcrumb crumbsList={crumbList} />
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/product/addProduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart title="Sales Performance" data={data} grid dataKey="sales" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage src="https://pixabay.com/get/g39819105b71ed22abd4099c8ae2af1494914fccbad7b4bfe924330ef8bf657d702fa3bb0136d08157172e278783df99b135bd0eed2d54ca8c5daae861c233b1ecb7498e53b8b677560bb78018c6550e6_1920.jpg" />
            <ProductName>Apple Airport</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>5123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>In Stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLabel>Product Name</ProductFormLabel>
            <ProductFormInput type="text" placeholder="Appli AirPad" />
            <ProductFormLabel>In Stock</ProductFormLabel>
            <ProductFormSelect>
              <ProductFormSelectOption value="1">Yes</ProductFormSelectOption>
              <ProductFormSelectOption value="0">No</ProductFormSelectOption>
            </ProductFormSelect>
            <ProductFormLabel>Active</ProductFormLabel>
            <ProductFormSelect>
              <ProductFormSelectOption value="1">Yes</ProductFormSelectOption>
              <ProductFormSelectOption value="0">No</ProductFormSelectOption>
            </ProductFormSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductFormUpload>
              <ProductFormImage src="/images/shlok.jpg" />
              <ProductFormLabel htmlFor="file">
                <Publish style={{ cursor: "pointer" }} />
              </ProductFormLabel>
              <ProductFormInput
                style={{ display: "none" }}
                type="file"
                id="file"
              />
            </ProductFormUpload>
            <ProductFormSubmit>Update</ProductFormSubmit>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductContainer>
  );
};
