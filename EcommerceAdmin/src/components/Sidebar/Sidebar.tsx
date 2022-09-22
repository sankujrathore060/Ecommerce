import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import React, { useState } from "react";
import { SidebarContainer, SidebarWrapper } from "./Sidebar.Styles";
import { SidebarMenu } from "./SidebarMenu";
import { ISidebarListItem } from "models/Sidebar";
import { MenuType } from "common/enum";

type SidebarProps = {};

interface ISidebarITems {
  dashboardItems: ISidebarListItem[];
  quickMenuItems: ISidebarListItem[];
  notificationItems: ISidebarListItem[];
  staffItems: ISidebarListItem[];
}

const dashboardItems: ISidebarListItem[] = [
  {
    icon: <LineStyle style={{ paddingRight: 5 }} />,
    text: "Home",
    isActive: true,
    to: "/",
  },
  {
    icon: <Timeline style={{ paddingRight: 5 }} />,
    text: "Analytics",
    isActive: false,
    to: "/analytics",
  },
  {
    icon: <TrendingUp style={{ paddingRight: 5 }} />,
    text: "Sales",
    isActive: false,
    to: "/sales",
  },
];
const quickMenuItems: ISidebarListItem[] = [
  {
    icon: <PermIdentity style={{ paddingRight: 5 }} />,
    text: "Users",
    isActive: false,
    to: "/users",
  },
  {
    icon: <Storefront style={{ paddingRight: 5 }} />,
    text: "Products",
    isActive: false,
    to: "/products",
  },
  {
    icon: <AttachMoney style={{ paddingRight: 5 }} />,
    text: "Transactions",
    isActive: false,
    to: "/sales",
  },
  {
    icon: <BarChart style={{ paddingRight: 5 }} />,
    text: "Reports",
    isActive: false,
    to: "/sales",
  },
];
const notificationItems: ISidebarListItem[] = [
  {
    icon: <MailOutline style={{ paddingRight: 5 }} />,
    text: "Mail",
    isActive: false,
    to: "/sales",
  },
  {
    icon: <DynamicFeed style={{ paddingRight: 5 }} />,
    text: "Feedback",
    isActive: false,
    to: "sales",
  },
  {
    icon: <ChatBubbleOutline style={{ paddingRight: 5 }} />,
    text: "Messages",
    isActive: false,
    to: "sales",
  },
  {
    icon: <BarChart style={{ paddingRight: 5 }} />,
    text: "Reports",
    isActive: false,
    to: "sales",
  },
];
const staffItems: ISidebarListItem[] = [
  {
    icon: <WorkOutline style={{ paddingRight: 5 }} />,
    text: "Manage",
    isActive: false,
    to: "sales",
  },
  {
    icon: <Timeline style={{ paddingRight: 5 }} />,
    text: "Analytics",
    isActive: false,
    to: "sales",
  },
  {
    icon: <Report style={{ paddingRight: 5 }} />,
    text: "Reports",
    isActive: false,
    to: "sales",
  },
];

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [menu, setMenu] = useState<{ name: string; isOpen: boolean }[]>([
    {
      name: MenuType.DASHBOARD,
      isOpen: true,
    },
    {
      name: MenuType.QUICKMENU,
      isOpen: false,
    },
    {
      name: MenuType.NOTIFICATION,
      isOpen: false,
    },
    {
      name: MenuType.STAFF,
      isOpen: false,
    },
  ]);
  const [item, setItem] = useState<ISidebarITems>({
    dashboardItems,
    quickMenuItems,
    notificationItems,
    staffItems,
  });

  const handleMenuClick = (isOpen: boolean, type: MenuType) => {
    const temp = menu;
    const finalmenu: { name: string; isOpen: boolean }[] = temp.map((x) => {
      if (x.name === type) {
        x.isOpen = isOpen;
      }
      return x;
    });
    setMenu(finalmenu);
  };

  const handleMenuItemClick = (propertyName: string, menu: MenuType) => {
    const allitem = item;
    var dashboardItem = allitem.dashboardItems.map((x) => {
      x.isActive = menu === MenuType.DASHBOARD && x.text === propertyName;
      return x;
    });
    var quickMenuItem = allitem.quickMenuItems.map((x) => {
      x.isActive = menu === MenuType.QUICKMENU && x.text === propertyName;
      return x;
    });
    var notificationItem = allitem.notificationItems.map((x) => {
      x.isActive = menu === MenuType.NOTIFICATION && x.text === propertyName;
      return x;
    });
    var staffItem = allitem.staffItems.map((x) => {
      x.isActive = menu === MenuType.STAFF && x.text === propertyName;
      return x;
    });
    setItem({
      dashboardItems: dashboardItem,
      quickMenuItems: quickMenuItem,
      notificationItems: notificationItem,
      staffItems: staffItem,
    });
  };

  const getMenuStatus = (type: MenuType): boolean => {
    const item = menu.find((x) => x.name === type);
    if (item) {
      return item.isOpen;
    }
    return false;
  };

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu
          title="Dashboard"
          items={item.dashboardItems}
          isOpen={getMenuStatus(MenuType.DASHBOARD)}
          handleMenuClick={(open: boolean) =>
            handleMenuClick(open, MenuType.DASHBOARD)
          }
          handleMenuItemClick={(propertyName: string) =>
            handleMenuItemClick(propertyName, MenuType.DASHBOARD)
          }
        />
        <SidebarMenu
          title="Quick Menu"
          items={item.quickMenuItems}
          isOpen={getMenuStatus(MenuType.QUICKMENU)}
          handleMenuClick={(open: boolean) =>
            handleMenuClick(open, MenuType.QUICKMENU)
          }
          handleMenuItemClick={(propertyName: string) =>
            handleMenuItemClick(propertyName, MenuType.QUICKMENU)
          }
        />
        <SidebarMenu
          title="Notifications"
          items={item.notificationItems}
          isOpen={getMenuStatus(MenuType.NOTIFICATION)}
          handleMenuClick={(open: boolean) =>
            handleMenuClick(open, MenuType.NOTIFICATION)
          }
          handleMenuItemClick={(propertyName: string) =>
            handleMenuItemClick(propertyName, MenuType.NOTIFICATION)
          }
        />
        <SidebarMenu
          title="Staff"
          items={item.staffItems}
          isOpen={getMenuStatus(MenuType.STAFF)}
          handleMenuClick={(open: boolean) =>
            handleMenuClick(open, MenuType.STAFF)
          }
          handleMenuItemClick={(propertyName: string) =>
            handleMenuItemClick(propertyName, MenuType.STAFF)
          }
        />
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
