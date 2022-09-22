import React from "react";
import { Link } from "react-router-dom";
import { Home, NavigateNext } from "@material-ui/icons";
import { IPageBreadcrumb } from "models/PageBreadcrumb";
import {
  BreadcrumbTitleTypography,
  BreadcrumbTypography,
  StyledBreadcrumb,
} from "./PageBreadcrumb.styles";

type PageBreadcrumbProps = {
  crumbsList: IPageBreadcrumb[];
};

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({
  crumbsList,
}) => {
  const breadcrums = crumbsList.map((crumb, index) => {
    if (crumb.isLast) {
      return (
        <BreadcrumbTypography key={index} color="textPrimary">
          <BreadcrumbTitleTypography>{crumb.title}</BreadcrumbTitleTypography>
        </BreadcrumbTypography>
      );
    } else {
      return (
        <Link to={crumb.to} key={index}>
          <BreadcrumbTypography color="textPrimary">
            <BreadcrumbTitleTypography>{crumb.title}</BreadcrumbTitleTypography>
          </BreadcrumbTypography>
        </Link>
      );
    }
  });
  const homeCrumb = (
    <Link color="inherit" to="/">
      <BreadcrumbTypography>
        <Home />
        <BreadcrumbTitleTypography>Home</BreadcrumbTitleTypography>
      </BreadcrumbTypography>
    </Link>
  );

  return (
    <StyledBreadcrumb separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
      {homeCrumb}
      {breadcrums}
    </StyledBreadcrumb>
  );
};
