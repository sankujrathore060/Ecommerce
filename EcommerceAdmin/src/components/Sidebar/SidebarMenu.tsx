import { ISidebarListItem } from "models/Sidebar";
import React from "react";
import {
  SidebarList,
  SidebarListItem,
  SidebarMenuContainer,
  SidebarTitle,
  DropableIcon,
  Menu
} from "./Sidebar.Styles";
import {
  ExpandLess,
  ExpandMore
} from "@material-ui/icons";
import { Link } from "react-router-dom";

type ISidebarProps = {
  title: string;
  items: ISidebarListItem[];  
  handleMenuClick: (isOpen: boolean) => void;
  handleMenuItemClick: (propertyName: string) => void;
  isOpen?: boolean;
};

export const SidebarMenu: React.FC<ISidebarProps> = ({ title, items, isOpen, handleMenuClick, handleMenuItemClick}) => {
  const listItems = items.map(({ icon, text, isActive, to }, i) => (
    <Link key={i} to={to} style={{ textDecoration: "none" }} onClick={() => handleMenuItemClick(text)}>
      <SidebarListItem active={isActive ? true : false}>
        {icon}
        {text}
      </SidebarListItem>    
    </Link>
  ));

  return (
    <SidebarMenuContainer>
      <Menu>
      <SidebarTitle>{title}</SidebarTitle>
      <DropableIcon onClick={() => handleMenuClick(!isOpen)}>
        { isOpen ? <ExpandLess style={{fontSize: 15}}/> : <ExpandMore style={{fontSize: 15}}/>  }
      </DropableIcon>
      </Menu>
      <SidebarList active={isOpen} >{listItems}</SidebarList>
    </SidebarMenuContainer>
  );
};
