import React from "react";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutlined,
  LocationSearching,
} from "@material-ui/icons";
import {
  UserShow,
  UserUpdate,
  UserShowBottom,
  UserShowTop,
  UserShowTopImage,
  UserShowUserName,
  UserShowTopTitle,
  UserShowUserTitle,
  UserShowTitle,
  UserShowInfoTitle,
  UserShowInfo,
} from "./User.Styles";

type DisplayUserProps = {};

const DisplayUser: React.FC<DisplayUserProps> = ({}) => {
  return (
    <UserShow>
      <UserShowTop>
        <UserShowTopImage src="/images/shlok.jpg" />
        <UserShowTopTitle>
          <UserShowUserName>Shlok</UserShowUserName>
          <UserShowUserTitle>Test</UserShowUserTitle>
        </UserShowTopTitle>
      </UserShowTop>
      <UserShowBottom>
        <UserShowTitle>Account Details</UserShowTitle>
        <UserShowInfo>
          <PermIdentity style={{ fontSize: "16px" }} />
          <UserShowInfoTitle>Sankuj@123</UserShowInfoTitle>
        </UserShowInfo>
        <UserShowInfo>
          <CalendarToday style={{ fontSize: "16px" }} />
          <UserShowInfoTitle>01.10.1999</UserShowInfoTitle>
        </UserShowInfo>
        <UserShowTitle>Contact Details</UserShowTitle>
        <UserShowInfo>
          <PhoneAndroid style={{ fontSize: "16px" }} />
          <UserShowInfoTitle>+78798987987</UserShowInfoTitle>
        </UserShowInfo>
        <UserShowInfo>
          <MailOutlined style={{ fontSize: "16px" }} />
          <UserShowInfoTitle>Sankuj@123</UserShowInfoTitle>
        </UserShowInfo>
        <UserShowInfo>
          <LocationSearching style={{ fontSize: "16px" }} />
          <UserShowInfoTitle>Ahmedabad</UserShowInfoTitle>
        </UserShowInfo>
      </UserShowBottom>
    </UserShow>
  );
};

export default DisplayUser;
