import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

export default function SideMenu() {
  return (
    <>
      <Box p={2} borderRadius={2}>
        Box
      </Box>

      <Paper sx={{ p: 2 }}>Paper</Paper>

      <Card sx={{ mt: 3 }}>
        <CardHeader title="Cardのタイトル" subheader="2023-01-01 10:00:00" />
        <CardMedia
          component="img"
          height="80"
          image="https://placehold.jp/3d4070/ffffff/300x300.png?text=Card%20Image"
        />
        <CardContent>
          <p>カードの本文を自由に書きます</p>
          <CardActions>
            <Button variant="contained">OK</Button>
            <Button variant="contained">Cancel</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
