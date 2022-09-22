import React from "react";
import {
  UserContainer,
  UserTitle,
  UserTitleContainer,
  UserCreateButton,
  UserContainerWrapper,
} from "./User.Styles";
import DisplayUser from "./DisplayUser";
import UpdateUser from "./UpdateUser";
import { Link } from "react-router-dom";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import { PageBreadcrumb } from "pages/PageBreadcrumb/PageBreadcrumb";

type UserProps = {};

const User: React.FC<UserProps> = ({}) => {
  const crumbList: IPageBreadcrumb[] = [
    { to: "/users", title: "UserList", isLast: false },    
    { to: "/user/1", title: "User", isLast: true },    
  ];
  return (
    <UserContainer>      
      <PageBreadcrumb crumbsList={crumbList} />
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/user/addUser">
          <UserCreateButton>Create</UserCreateButton>
        </Link>
      </UserTitleContainer>
      <UserContainerWrapper>
        <DisplayUser />
        <UpdateUser />
      </UserContainerWrapper>
    </UserContainer>
  );
};

export default User;
