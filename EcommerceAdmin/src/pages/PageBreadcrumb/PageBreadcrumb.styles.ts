import { Breadcrumbs, Typography } from "@material-ui/core";
import styled from "styled-components";

export const BreadcrumbTypography = styled(Typography)`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  color: orange !important;
`;

export const BreadcrumbTitleTypography = styled(Typography)`
  font-weight: 700 !important;
  text-decoration: none !important;
  color: teal !important;
`;

export const StyledBreadcrumb = styled(Breadcrumbs)`
  padding: 10px 20px;
  background: rgb(251 251 255);
  margin-bottom: 20px !important;
`;
