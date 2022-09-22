import React from "react";
import {
  WidgetSmButton,
  WidgetSmIcon,
  WidgetSmImage,
  WidgetSmListItem,
  WidgetSmUser,
  WidgetSmUserName,
  WidgetSmUserTitle,
} from "./WidgetSm.Styles";

type WidgetSmListItems = {
  pitureUrl: string;
  userName: string;
  userTitle: string;
};

const WidgetSmListItems: React.FC<WidgetSmListItems> = ({
  pitureUrl,
  userName,
  userTitle,
}) => {
  return (
    <WidgetSmListItem>
      <WidgetSmImage src={pitureUrl} />
      <WidgetSmUser>
        <WidgetSmUserName>{userName}</WidgetSmUserName>
        <WidgetSmUserTitle>{userTitle}</WidgetSmUserTitle>
      </WidgetSmUser>
      <WidgetSmButton>
        <WidgetSmIcon />
        Display
      </WidgetSmButton>
    </WidgetSmListItem>
  );
};

export default WidgetSmListItems;
