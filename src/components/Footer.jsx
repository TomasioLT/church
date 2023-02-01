import {
  Box,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 0,
      }}>
      <Grid container columnSpacing={3} width={{ xs: "90%", md: "65%" }}>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>About</ListSubheader>
            <ListItemText>Beliefs</ListItemText>
            <ListItemText>Values</ListItemText>
            <ListItemText>Leadership</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>Media</ListSubheader>
            <ListItemText>Sermons</ListItemText>
            <ListItemText>Watch Online</ListItemText>
            <ListItemText>Elevation Store</ListItemText>
            <ListItemText>Worship</ListItemText>
            <ListItemText>Podcast</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>Ministries</ListSubheader>
            <ListItemText>eGroups</ListItemText>
            <ListItemText>eKidz</ListItemText>
            <ListItemText>Outreach</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>Opportunities</ListSubheader>
            <ListItemText>Jobs</ListItemText>
            <ListItemText>Internships</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>Join Us</ListSubheader>
            <ListItemText>Find a Location</ListItemText>
            <ListItemText>Watch Parties</ListItemText>
            <ListItemText>Events</ListItemText>
          </List>
        </Grid>

        <Grid container xs={6} md={2} direction="column" sx={{ pl: 3 }}>
          <Grid item>
            <List>
              <ListSubheader sx={{ p: 0 }}>Finance</ListSubheader>
              <ListItemText>Giving</ListItemText>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListSubheader sx={{ p: 0 }}>Personal</ListSubheader>
              <ListItemText>MyElevation</ListItemText>
              <ListItemText>Contact Us</ListItemText>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
