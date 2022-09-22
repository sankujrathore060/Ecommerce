import { IDropdownType } from "models/Common";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";
import React from "react";
import {
  AddProductComponent,
  AddProductForm,
  AddProductFormButton,
  AddProductFormInput,
  AddProductFormItem,
  AddProductFormLabel,
  AddProductFormRadioGroup,
  AddProductFormSelect,
  AddProductFormSelectOption,
  AddProductTitle,
} from "./AddProduct.Styles";

type AddProductProps = {};

export const AddProduct: React.FC<AddProductProps> = ({}) => {
  const getUserFromItems = (
    type: string,
    placeholder: string,
    label: string,
    id?: string,
    name?: string,
    value?: string,
    isRadio?: boolean
  ): React.ReactNode => {
    return isRadio ? (
      <>
        <AddProductFormInput
          type={type}
          name={name}
          value={value}
          id={id}
          controlType="radio"
        />
        <AddProductFormLabel htmlFor={id} controlType="radio">
          {label}
        </AddProductFormLabel>
      </>
    ) : (
      <AddProductFormItem>
        <AddProductFormLabel>{label}</AddProductFormLabel>
        <AddProductFormInput
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          controlType={type}
        />
      </AddProductFormItem>
    );
  };

  const getUserFormSelectItems = (
    placeholder: string,
    label: string,
    items: IDropdownType[],
    id?: string,
    name?: string
  ): React.ReactNode => {
    return (
      <AddProductFormItem>
        <AddProductFormLabel>{label}</AddProductFormLabel>
        <AddProductFormSelect name={name} id={id} placeholder={placeholder}>
          {items.map(({ name, value }, i) => (
            <AddProductFormSelectOption key={i} value={value}>
              {name}
            </AddProductFormSelectOption>
          ))}
        </AddProductFormSelect>
      </AddProductFormItem>
    );
  };

  const selectStatusItemList: IDropdownType[] = [
    { name: "Yes", value: "1" },
    { name: "No", value: "0" },
  ];

  const crumbList: IPageBreadcrumb[] = [
    { to: "/products", title: "ProductList", isLast: false },    
    { to: "/product/1", title: "Product", isLast: false },
    { to: "/product/addProduct", title: "products", isLast: true },
  ];
  return (
    <AddProductComponent>      
      <PageBreadcrumb crumbsList={crumbList} />
      <AddProductTitle>AddProduct</AddProductTitle>
      <AddProductForm>
        {getUserFromItems("file", "", "Image")}
        {getUserFromItems("text", "name", "Name")}
        {getUserFromItems("text", "john", "Full Name")}
        {getUserFromItems("text", "123", "Stock")}
        {getUserFormSelectItems(
          "select status",
          "status",
          selectStatusItemList
        )}
      </AddProductForm>
      <AddProductFormButton>Create</AddProductFormButton>
    </AddProductComponent>
  );
};
