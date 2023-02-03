import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Trans, useTranslation } from "react-i18next";
import { Container } from "@mui/system";

function App() {
  // Translation tool:
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Box sx={{ minHeigh: "100vh" }}>
      <Navbar />
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => changeLanguage("en")}>
        English
      </Button>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => changeLanguage("lt")}>
        Lietuviskai
      </Button>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => changeLanguage("ru")}>
        rusiskai
      </Button>

      <Container sx={{ border: "solid black 1px" }}>
        <Typography>{t("title")}</Typography>
        <Trans i18nKey="description.part1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <div>{t("description.part2")}</div>
      </Container>
      {/* <Home />
      <Footer /> */}
    </Box>
  );
}

export default App;
