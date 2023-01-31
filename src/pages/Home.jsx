import {
  Facebook,
  Favorite,
  FavoriteBorderOutlined,
  Instagram,
  LocationCityOutlined,
  Person,
  Person2Outlined,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box } from "@mui/system";
import React from "react";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
const Home = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      mt={2}>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        width={{ xs: "90%", md: "65%" }}>
        <Grid
          mb={3}
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          display="flex">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="main photo"
            sx={{ height: "auto", width: "100%" }}
          />
        </Grid>
        {/* LEft */}
        <Grid container xs={12} md={8} direction="column">
          <Grid item xs={12}>
            <Typography variant="h5">Let’s tailor your experience.</Typography>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <Person2Outlined />
                </ListItemIcon>
                <ListItemText primary="New here?" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LocationCityOutlined />
                </ListItemIcon>
                <ListItemText primary="Im part of Efam" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Im already part of campus community" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="main photo"
              sx={{ height: "50%", width: "90%" }}
            />
          </Grid>
        </Grid>
        {/* Right */}
        <Grid container xs={12} md={4}>
          <Grid item xs={12}>
            <Typography variant="h6">Get Involved</Typography>
            <Typography variant="body2">
              See what God can do through you.
            </Typography>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <VolunteerActivismOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Giving" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <LocationCityOutlined />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
              <Divider />

              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Volunteer" />
              </ListItemButton>
              <Divider />

              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderOutlined />
                </ListItemIcon>
                <ListItemText primary="Outreach" />
              </ListItemButton>
              <Divider />

              <ListItemButton>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="eFam" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">For your Family</Typography>
            <Typography variant="body2">
              See what God can do through your family.
            </Typography>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <VolunteerActivismOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="eKidz" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <LocationCityOutlined />
                </ListItemIcon>
                <ListItemText primary="Elevation Youth" />
              </ListItemButton>
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Follow Elevation Church</Typography>

            <List>
              <ListItemButton>
                <ListItemIcon>
                  <YouTube />
                </ListItemIcon>
                <ListItemText primary="Youtube" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <Instagram />
                </ListItemIcon>
                <ListItemText primary="Instagram" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <Facebook />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <Telegram />
                </ListItemIcon>
                <ListItemText primary="Telegram" />
              </ListItemButton>
              <Divider />
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
