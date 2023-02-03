import {
  Facebook,
  FavoriteBorderOutlined,
  Instagram,
  LocationCityOutlined,
  Person2Outlined,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box } from "@mui/system";
import React from "react";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import mainPhoto from "../assets/home-photo.jpg";
import imageMountain from "../assets/mountain.jpg";
import imageCollage from "../assets/collage.webp";
const Home = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      mt={2}>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        width={{ xs: "90%", md: "65%" }}>
        <Grid
          mb={3}
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          display="flex"
          sx={{ pl: 0 }}>
          {/* Image on background Box */}
          <Box
            alt="main photo"
            sx={{
              backgroundImage: `url(${mainPhoto})`,
              backgroundRepeat: "no-repeat",
              color: "#f5f5f5",
              backgroundSize: "cover",
              height: "450px",
              width: { xs: "100%", md: "100%" },
              position: "relative",
              borderRadius: "10px",
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                alignItems: "flex-start",
                gap: "10px",
                bottom: 0,
                m: 2,
              }}>
              <Chip
                label="Latest sermon"
                sx={{ color: "white", backgroundColor: "grey" }}
              />
              <Typography variant="h5">Don't Fight Your Future</Typography>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Button variant="contained">Watch Sermon</Button>
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}>
                  View more Sermons
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* LEft */}
        <Grid container xs={12} md={8} direction="column" rowSpacing={3}>
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
              alt="mountain photo"
              sx={{
                backgroundImage: `url(${imageMountain})`,
                backgroundRepeat: "no-repeat",
                color: "#f5f5f5",
                backgroundSize: "cover",
                height: "350px",
                width: "90%",
                position: "relative",
                borderRadius: "10px",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  alignItems: "flex-start",
                  gap: "10px",
                  bottom: 0,
                  m: 2,
                }}>
                <Typography variant="h5">
                  A New eGroup Study from Holly Furtick
                </Typography>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Button
                    variant="contained"
                    sx={{ color: "black", backgroundColor: "white" }}>
                    Lear More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              alt="main photo"
              sx={{
                backgroundImage: `url(${imageCollage})`,
                backgroundRepeat: "no-repeat",
                color: "#f5f5f5",
                backgroundSize: "cover",
                height: "350px",
                width: "90%",
                position: "relative",
                borderRadius: "10px",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  alignItems: "flex-start",
                  gap: "5px",
                  bottom: 0,
                  m: 2,
                }}>
                <Typography variant="h4">This is church. Anywhere.</Typography>
                <Typography variant="h6">
                  Join eFam all over the world for Elevation Church Online.
                </Typography>
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Button
                    variant="contained"
                    sx={{ color: "black", backgroundColor: "white" }}>
                    Watch Online
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Right */}
        <Grid container xs={12} md={4} rowSpacing={5}>
          <Grid item xs={12}>
            <Typography variant="h6">Get Involved</Typography>
            <Typography variant="body2">
              See what God can do through you.
            </Typography>
            <List>
              <Divider />
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
              <Divider />
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">For your Family</Typography>
            <Typography variant="body2">
              See what God can do through your family.
            </Typography>
            <List>
              <Divider />

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
              <Divider />

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
