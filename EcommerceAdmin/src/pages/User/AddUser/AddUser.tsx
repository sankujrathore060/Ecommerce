import { IDropdownType } from "models/Common";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";
import React from "react";
import {
  AddUserComponent,
  AddUserForm,
  AddUserFormButton,
  AddUserFormInput,
  AddUserFormItem,
  AddUserFormLabel,
  AddUserFormRadioGroup,
  AddUserFormSelect,
  AddUserFormSelectOption,
  AddUserTitle,
} from "./AddUser.Styles";

type AddUserProps = {};

export const AddUser: React.FC<AddUserProps> = ({}) => {
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
        <AddUserFormInput type={type} name={name} value={value} id={id} controlType = "radio"/>
        <AddUserFormLabel htmlFor={id} controlType = "radio">{label}</AddUserFormLabel>
      </>
    ) : (
      <AddUserFormItem>
        <AddUserFormLabel>{label}</AddUserFormLabel>
        <AddUserFormInput
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          controlType={type}
        />
      </AddUserFormItem>
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
      <AddUserFormItem>
        <AddUserFormLabel>{label}</AddUserFormLabel>
        <AddUserFormSelect name={name} id={id} placeholder={placeholder}>
          {items.map(({ name, value }, i) => (
            <AddUserFormSelectOption key={i} value={value}>
              {name}
            </AddUserFormSelectOption>
          ))}
        </AddUserFormSelect>
      </AddUserFormItem>
    );
  };

  const selectStatusItemList: IDropdownType[] = [
    { name: "Yes", value: "1" },
    { name: "No", value: "0" },
  ];
  const crumbList: IPageBreadcrumb[] = [
    { to: "/users", title: "UserList", isLast: false },
    { to: "/user/1", title: "User", isLast: false },    
    { to: "/addUser", title: "AddUser", isLast: true },        
  ];
  return (
    <AddUserComponent>      
      <PageBreadcrumb crumbsList={crumbList} />
      <AddUserTitle>AddUser</AddUserTitle>
      <AddUserForm>
        {getUserFromItems("text", "username", "User Name")}
        {getUserFromItems("text", "john", "Full Name")}
        {getUserFromItems("email", "john@123", "Email")}
        {getUserFromItems("password", "password", "Password")}
        {getUserFromItems("text", "phone", "Phone")}
        {getUserFromItems("text", "address", "Address")}

        <AddUserFormItem>
          <AddUserFormLabel>Gender</AddUserFormLabel>
          <AddUserFormRadioGroup>
          {getUserFromItems(
            "radio",
            "",
            "Male",
            "male",
            "gender",
            "male",
            true
          )}
          {getUserFromItems(
            "radio",
            "",
            "Female",
            "female",
            "gender",
            "female",
            true
          )}
          {getUserFromItems(
            "radio",
            "",
            "Other",
            "other",
            "gender",
            "other",
            true
          )}
          </AddUserFormRadioGroup>       
     
        </AddUserFormItem>
        {getUserFormSelectItems(
            "select status",
            "status",
            selectStatusItemList
          )}
      </AddUserForm>
        <AddUserFormButton>Create</AddUserFormButton>
    </AddUserComponent>
  );
};
