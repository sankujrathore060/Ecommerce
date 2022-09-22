import React from "react";
import {
  UserUpdate,
  UserUpdateTitle,
  UserUpdateForm,
  UserUpdateLeft,
  UserUpdateRight,
  UserUpdateItem,
  UserUpdateFormLabel,
  UserUpdateFormInput,
  UserUpdateUpload,
  UserUpdateImage,
  UserUpdateSubmit,
} from "./User.Styles";
import { Publish } from "@material-ui/icons";

type UpdateUserProps = {};

const UpdateUser: React.FC<UpdateUserProps> = ({}) => {
  return (
    <UserUpdate>
      <UserUpdateTitle>Update</UserUpdateTitle>
      <UserUpdateForm>
        <UserUpdateLeft>
          <UserUpdateItem>
            <UserUpdateFormLabel>User Name</UserUpdateFormLabel>
            <UserUpdateFormInput type="text" placeholder="Sankuj@123" />
          </UserUpdateItem>
          <UserUpdateItem>
            <UserUpdateFormLabel>Email</UserUpdateFormLabel>
            <UserUpdateFormInput type="email" placeholder="Sankuj@123" />
          </UserUpdateItem>
          <UserUpdateItem>
            <UserUpdateFormLabel>Phone Number</UserUpdateFormLabel>
            <UserUpdateFormInput type="number" placeholder="+78798987987" />
          </UserUpdateItem>
          <UserUpdateItem>
            <UserUpdateFormLabel>Address</UserUpdateFormLabel>
            <UserUpdateFormInput type="text" placeholder="Ahmedabad" />
          </UserUpdateItem>
        </UserUpdateLeft>
        <UserUpdateRight>
          <UserUpdateUpload>
            <UserUpdateImage src="/images/shlok.jpg" />
            <UserUpdateFormLabel htmlFor="file">
              <Publish style={{ cursor: "pointer" }} />
            </UserUpdateFormLabel>
            <UserUpdateFormInput
              style={{ display: "none" }}
              type="file"
              id="file"
            />
          </UserUpdateUpload>
          <UserUpdateSubmit>Update</UserUpdateSubmit>
        </UserUpdateRight>
      </UserUpdateForm>
    </UserUpdate>
  );
};

export default UpdateUser;
