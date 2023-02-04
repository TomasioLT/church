import {
  Box,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

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
            <ListSubheader sx={{ p: 0 }}>
              {t("footer.about.about")}
            </ListSubheader>
            <ListItemText>{t("footer.about.beliefs")}</ListItemText>
            <ListItemText>{t("footer.about.values")}</ListItemText>
            <ListItemText>{t("footer.about.leadership")}</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>
              {t("footer.media.media")}
            </ListSubheader>
            <ListItemText>{t("footer.media.sermons")}</ListItemText>
            <ListItemText>{t("footer.media.watchOnline")}</ListItemText>
            <ListItemText>{t("footer.media.elevationStore")}</ListItemText>
            <ListItemText>{t("footer.media.worship")}</ListItemText>
            <ListItemText>{t("footer.media.podcast")}</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>
              {t("footer.ministries.ministries")}
            </ListSubheader>
            <ListItemText>{t("footer.ministries.eGroups")}</ListItemText>
            <ListItemText>{t("footer.ministries.eKidz")}</ListItemText>
            <ListItemText>{t("footer.ministries.outreach")}</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>
              {t("footer.oppurtunities.oppurtunities")}
            </ListSubheader>
            <ListItemText>{t("footer.oppurtunities.jobs")}</ListItemText>
            <ListItemText>{t("footer.oppurtunities.internships")}</ListItemText>
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <List>
            <ListSubheader sx={{ p: 0 }}>
              {t("footer.joinUs.joinUs")}
            </ListSubheader>
            <ListItemText>{t("footer.joinUs.findALocation")}</ListItemText>
            <ListItemText>{t("footer.joinUs.watchParties")}</ListItemText>
            <ListItemText>{t("footer.joinUs.events")}</ListItemText>
          </List>
        </Grid>

        <Grid container xs={6} md={2} direction="column" sx={{ pl: 3 }}>
          <Grid item>
            <List>
              <ListSubheader sx={{ p: 0 }}>
                {t("footer.finance.finance")}
              </ListSubheader>
              <ListItemText>{t("footer.finance.giving")}</ListItemText>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListSubheader sx={{ p: 0 }}>
                {t("footer.personal.personal")}
              </ListSubheader>
              <ListItemText>{t("footer.personal.myElevation")}</ListItemText>
              <ListItemText>{t("footer.personal.contactUs")}</ListItemText>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
