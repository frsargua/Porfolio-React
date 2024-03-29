import {
  Typography,
  Card,
  ButtonGroup,
  Button,
  CardMedia,
  Grid,
  CardContent,
  Chip,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function PorfolioCard({ values }) {
  return (
    <Grid item xs={12} md={6} lg={6} component="div" height={{ xs: "600px" }}>
      <Card
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "90%",
            width: "100%",
          }}
        >
          <Stack>
            <ImageCarousel images={values.imageUrls} />
            {/* <CardMedia
              component="img"
              height="60px"
              image={require("../images/" + values.imageUrl)}
              alt="green iguana"
              sx={{ marginBottom: "1rem", objectFit: "contain" }}
            /> */}
            <Typography
              sx={{ my: "1rem" }}
              variant="h5"
              component="h3"
              textAlign="center"
            >
              {values.title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              sx={{ marginRight: "2rem" }}
            >
              {values.description}
            </Typography>
            <Stack direction="row" spacing={1} rowGap={1} flexWrap="wrap">
              {values.technologies.map((el) => {
                {
                  return <Chip label={el} color="default" />;
                }
              })}
            </Stack>
          </Stack>
          <ButtonGroup
            sx={{
              marginX: "auto",
            }}
          >
            <Button component="a" href={values.repoUrl} target="_blank">
              Repo
            </Button>
            {values.deployed ? (
              <Button component="a" href={values.deployed} target="_blank">
                Deployed
              </Button>
            ) : (
              <Button
                disabled
                component="a"
                href={values.deployed}
                target="_blank"
              >
                Deployed
              </Button>
            )}
          </ButtonGroup>
        </CardContent>
      </Card>
    </Grid>
  );
}
