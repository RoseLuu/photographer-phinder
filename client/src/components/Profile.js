import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// /import Carousel from "react-material-ui-carousel";
// import CarouselSlide from "react-material-ui-carousel";
import Link from "@mui/material/Link";
import { teal, indigo } from "@mui/material/colors";

// import React from 'react';

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { getDefaultNormalizer } from "@testing-library/react";

// var Mailto = require('react-mailto');

// const itemData = [
//     {
//         img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//         title: "Breakfast",
//         author: "@bkristastucchio",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//         title: "Burger",
//         author: "@rollelflex_graphy726",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//         title: "Camera",
//         author: "@helloimnik",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//         title: "Coffee",
//         author: "@nolanissac",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//         title: "Hats",
//         author: "@hjrc33",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//         title: "Honey",
//         author: "@arwinneil",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//         title: "Basketball",
//         author: "@tjdragotta",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//         title: "Fern",
//         author: "@katie_wasserman",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//         title: "Mushrooms",
//         author: "@silverdalex",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//         title: "Tomato basil",
//         author: "@shelleypauls",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//         title: "Sea star",
//         author: "@peterlaster",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//         title: "Bike",
//         author: "@southside_customs",
//     },
// ];
const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondary = teal[500];
const secondaryLight = teal[200];

//This needs handlers for fetch calls to delete buttons need to be pathed to page to update page

const Profile = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    variables: { username: username },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === username) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  // console.log(itemData)

  return (
    <main>
      <Container
        maxWidth="xxl"
        sx={{
          bgcolor: secondaryLight,
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            paddingTop="20px"
            sx={{
              color: primaryDark,
            }}
          >
            {user.companyName}
            {/* Simply Class Photography */}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              color: primaryDark,
            }}
          >
            {" "}
            {user.bio}
            &nbsp;
            <Typography variant="h5" color="inherit" noWrap>
              Reservation Fee : {user.reservationCost}
            </Typography>
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {/* <Button sx={{
                            bgcolor: primaryLight,
                            color: primaryDark,
                            border: primaryDark,
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }} href="/update"
                            variant="outlined">Edit the post</Button> */}
            <Button
              sx={{
                bgcolor: primaryDark,
              }}
              href={user.link}
              variant="contained"
            >
              More of my work
            </Button>
            <Button
              sx={{
                bgcolor: primaryLight,
                color: primaryDark,
                border: primaryDark,
                borderStyle: "solid",
                borderWidth: "1px",
              }}
              variant="outlined"
            >
              Connect with me
              {/* <Mailto email={user.email}>
                                Connect with me </Mailto> */}
            </Button>
            <Button
              sx={{
                bgcolor: primaryDark,
              }}
              variant="contained"
            >
              Make appointment with me
            </Button>
          </Stack>
        </Box>

        <Box
          maxWidth="lg"
          sx={{
            paddingLeft: 90,
            m: 5,
          }}
        >
          <img src={user.image}></img>
        </Box>
      </Container>
    </main>
  );
};

export default Profile;
