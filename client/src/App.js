import React from "react";
import { Container, Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Items />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
