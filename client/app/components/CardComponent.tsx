import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Card {
  name: string;
  body: string;
  image: string;
}

export default function CardComponent({ name, body, image }: Card) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Card
        sx={{
          maxWidth: "22rem",
          height: "400",
          width: { md: 300, lg: 350 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="no image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: "100%" }}
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
