import React from "react";
import { Container } from "./Announcement.Styles";

type AnnouncementProps = {};

export const Announcement: React.FC<AnnouncementProps> = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};
