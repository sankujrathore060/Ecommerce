import { ActiveUserList } from "common/data";
import React from "react";
import {
  WidgetSmContainer,
  WidgetSmList,
  WidgetSmTitle,
  HorizontalLine
} from "./WidgetSm.Styles";
import WidgetSmListItems from "./WidgetSmListItems";

type WidgetSmProps = {};

const WidgetSm: React.FC<WidgetSmProps> = ({}) => {
  const userList = ActiveUserList.map((item, i) => (
   <>
    <WidgetSmListItems
      key={i}
      userName={item.userName}
      userTitle={item.userTitle}
      pitureUrl={item.pitureUrl}
    />
    <HorizontalLine/>
    </>

  ));
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>{userList}</WidgetSmList>
    </WidgetSmContainer>
  );
};

export default WidgetSm;
