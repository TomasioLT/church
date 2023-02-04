import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import siteLogo from "../assets/site-logo.svg";
import { useTranslation } from "react-i18next";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowRight, OutlinedFlag } from "@mui/icons-material";
const siteWidth = {
  mobile: "90%",
  dekstop: "65%",
};
function Navbar() {
  const { t, i18n } = useTranslation();

  const pages = [
    t("navbar.sermons"),
    t("navbar.locations"),
    t("navbar.about"),
    t("navbar.getInvolved"),
    t("navbar.store"),
    t("navbar.online"),
    t("navbar.giving"),
  ];
  const siteTitle = "Isgelbejimo Sviesa";
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [drawerState, setDrawerState] = React.useState(false);
  const toggleDrawer = (event) => {
    setDrawerState(!drawerState);
  };
  // Languages menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 5,
      }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Mobile menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {/* Display only for: Mobile Menu */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Site Title + Logo */}
            <img
              src={siteLogo}
              alt="logo"
              style={{ width: "75px", height: "auto" }}
            />
            {/* Navbar menu links */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="error"
                sx={{ color: "white" }}
                endIcon={<ChevronRightIcon />}>
                {i18n.language}
              </Button>
              {/* Languages */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    i18n.changeLanguage("en");
                  }}>
                  English
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    i18n.changeLanguage("lt");
                  }}>
                  Lietuvių
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    i18n.changeLanguage("ru");
                  }}>
                  Русский
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer}>
        <List>
          {pages.map((page) => (
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <OutlinedFlag />
              </ListItemIcon>
              <ListItemText primary={page}></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
export default Navbar;
