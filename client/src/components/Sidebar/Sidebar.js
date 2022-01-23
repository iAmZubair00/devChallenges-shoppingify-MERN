import { Box, Tab, Tabs } from "@material-ui/core";
import React from "react";
import ListIcon from "@mui/icons-material/List";
import HistoryIcon from "@mui/icons-material/History";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/images/logo.svg";
import useStyles from "./styles";
import { Stack } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <IconTabs />
    </div>
  );
};

export default Sidebar;

const IconTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = useStyles();

  return (
    <Stack spacing={20} style={{ paddingTop: "1rem" }}>
      <img src={logo} alt="memoriesImage" height="60" />
      <BrowserRouter>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          classes={{ indicator: styles.indicator }}
          aria-label="icon tabs example"
        >
          {/* <Link to="/">
          <Tab icon={<ListIcon />} aria-label="list" className={styles.tab} />
        </Link>
        <Link to="/history">
          <Tab
            icon={<HistoryIcon />}
            aria-label="history"
            className={styles.tab}
          />
        </Link>
        <Link to="/">
          <Tab
            icon={<AssessmentIcon />}
            aria-label="stats"
            className={styles.tab}
          />
        </Link> */}
          <Tab
            icon={<ListIcon />}
            aria-label="list"
            className={styles.tab}
            component={Link}
            to="/items"
          />
          <Tab
            icon={<HistoryIcon />}
            aria-label="history"
            className={styles.tab}
            component={Link}
            to="/history"
          />
          <Tab
            icon={<AssessmentIcon />}
            aria-label="stats"
            className={styles.tab}
          />
        </Tabs>
      </BrowserRouter>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ShoppingCartIcon />
      </Box>
    </Stack>
  );
};
