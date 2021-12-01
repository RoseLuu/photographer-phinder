import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// /import Carousel from "react-material-ui-carousel";
// import CarouselSlide from "react-material-ui-carousel";
import { teal, indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
// import React from 'react';

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const primaryLight = indigo[200];
const primaryDark = indigo[900];
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
            {/* <Button
              sx={{
                bgcolor: primaryDark,
              }}
              href={user.link}
              variant="contained"
            >
              More of my work
            </Button> */}
            <Button
              sx={{
                bgcolor: primaryLight,
                color: primaryDark,
                border: primaryDark,
                borderStyle: "solid",
                borderWidth: "1px",
              }}
              href={user.link}
              target="_blank"
              variant="outlined"
            >
              Connect with me
            </Button>
            <Button
              sx={{
                bgcolor: primaryDark,
              }}
              variant="contained"
              component={Link}
              target="_blank"
              to={{
                pathname: `https://calendly.com/${user.companyName}`,
              }}
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
