import { AppBar, Toolbar } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <h1>App</h1>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <div>{children}</div>
        </Grid>
      </Grid>
    </Container>
  );
}
