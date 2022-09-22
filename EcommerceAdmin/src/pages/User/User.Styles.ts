import styled from "styled-components";

export const UserContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserTitle = styled.h1``;

export const UserCreateButton = styled.button`
  width: 80px;
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
`;

export const UserContainerWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 20px -2px #000000;
  box-shadow: 0px 0px 20px -2px #000000;
`;
export const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 20px -2px #000000;
  box-shadow: 0px 0px 20px -2px #000000;
  margin-left: 10px;
`;

export const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
export const UserShowTopImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const UserShowUserName = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

export const UserShowBottom = styled.div`
  margin-top: 20px;
`;

export const UserShowTitle = styled.span``;

export const UserShowInfoTitle = styled.span`
  margin-left: 20px;
`;

export const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const UserUpdateLeft = styled.div``;

export const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const UserUpdateFormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 15px;
`;

export const UserUpdateFormInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  height: 40px;
  width: 250px;
  padding: 0px 10px;
`;

export const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const UserUpdateImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

export const UserUpdateSubmit = styled.button`
  border: none;
  cursor: pointer;
  background-color: teal;
  border-radius: 5px;
  color: white;
  padding: 5px;
`;
