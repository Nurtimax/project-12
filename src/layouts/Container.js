import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="90%" margin="0 auto">
        <Box sx={{ bgcolor: "#f9f9f9" }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
}
