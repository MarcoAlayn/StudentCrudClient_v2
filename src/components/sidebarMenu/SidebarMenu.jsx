import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
  Button,
  CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../../assets/logo-TCA.png";
import { Link } from "react-router-dom";
import Text from "../text/Text";
import colors from "../../utils/colors";
import { showModalDetail, setModalMode } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { txtStyles } from "../text/TextStyles";

const drawerWidth = 240;

export default function SidebarMenu({ children }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handlerModalCreate = () => {
    dispatch(showModalDetail(true));
    dispatch(setModalMode("create"));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ marginLeft: "-15px" }}>
        <Toolbar>
          <IconButton
            position='fixed'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              marginRight: 0,
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <MenuIcon sx={{ color: colors.gray2 }} />
          </IconButton>
        </Toolbar>
      </Box>

      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: colors.gray,
            border: "none",
          },
        }}
      >
        <Toolbar sx={{ backgroundColor: colors.gray }}>
          {/* Contenido del Toolbar */}
        </Toolbar>

        {/* Module Links */}
        <List
          sx={{
            backgroundColor: colors.blue,
            borderRadius: "0 70px 0 0",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Toolbar sx={{ backgroundColor: colors.blue, marginLeft: "7px" }}>
            <CardMedia
              component='img'
              sx={{ width: "140px" }}
              image={Logo}
              alt='logo'
            />
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "33px",
            }}
          >
            <Divider
              sx={{
                background: "white",
                width: "140px",
                backgroundColor: colors.gray2,
                marginY:"15px"
              }}
            />
          </Box>
          <ListItem disablePadding>
            <ListItemButton>
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                to={"/"}
              >
                <ListItemIcon
                  sx={{
                    color: colors.gray,
                    minWidth: "40px",
                    marginLeft: "15px",
                  }}
                >
                  <SchoolIcon />
                </ListItemIcon>
                <Text text={"Estudiantes"} style={txtStyles.primary} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "start",
                }}
                to={"/login"}
              >
                <ListItemIcon
                  sx={{
                    color: colors.gray,
                    minWidth: "40px",
                    marginLeft: "15px",
                  }}
                >
                  <PeopleIcon />
                </ListItemIcon>
                <Text text={"Profesores"} style={txtStyles.primary} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='/home'>
              <ListItemIcon
                sx={{
                  color: colors.gray,
                  minWidth: "40px",
                  marginLeft: "15px",
                }}
              >
                <HomeIcon />
              </ListItemIcon>
              <Text text={"Home"} style={txtStyles.primary} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component='main'
        sx={{
          // width: "100%",
          flexGrow: 1,
          // p: 3,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: "-50px",
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
