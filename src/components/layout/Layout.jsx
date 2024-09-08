import React from "react";
import { Button, Container } from "@mui/material";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import colors from "../../utils/colors";

const Layout = ({ children }) => {
  return (
    <Container maxWidth='xl' sx={{ backgroundColor: colors.gray }}>
      <SidebarMenu children={children} />
    </Container>
  );
};

export default Layout;
