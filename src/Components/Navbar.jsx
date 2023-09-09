import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar variant="dense">
          <Typography variant="h6">Fuel Cost Calc</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
