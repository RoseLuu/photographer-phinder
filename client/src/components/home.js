import React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { teal, indigo } from "@mui/material/colors";
// import Profile from "./Profile";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { Typography } from "@mui/material";
// import { CardActionArea, CardActions } from "@mui/material";
import { QUERY_ALL_USERS } from "../utils/queries";
import Photographers from "./Photographers";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondaryLight = teal[200];

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_USERS);
  const users = data?.allusers || [];
  console.log(users);
  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: secondaryLight,
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              flexWrap: "nowrap",
            }}
          >
            <img
              className="homeImage"
              src="/image/pexels-andre-furtado-1264210.jpg"
              alt="Woman with Camera"
            ></img>
            <img
              className="homeImage"
              src="/image/pexels-hamann-la-947785.jpg"
              alt="Woman with Camera"
            ></img>
            <img
              className="homeImage"
              src="/image/pexels-element-digital-1051076.jpg"
              alt="Woman with Camera"
            ></img>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: primaryLight,
              borderStyle: "solid",
              borderColor: primaryDark,
              borderWidth: "5px",
              borderRadius: "10px",
            }}
          >
            <div className="homepagetext">
              <h1>
                {" "}
                Let us help you capture the perfect photographer to capture your
                perfect moments...
              </h1>
              <p>
                {" "}
                Whether you are celebrating a milestone in your life be it
                marriage or an edition to the family, or are looking to update
                your headshots, or maybe Fido needs a new portrait on the wall,
                let Photographer Phinder help you find that perfect person who
                will imortalize your memories!
              </p>

              <p>
                {" "}
                Not sure how to start? Photographer Phinder can help narrow the
                field, just let us know either what state you are looking to
                find a talented photographer or what type of photography you're
                looking for. We categorize our photographers by their identified
                specialty, choose from:
              </p>
              <ul>
                <li>
                  Wedding - Often our wedding photgraphers are also an excellent
                  option if you're looking for engagement photos as well!
                </li>
                <li>
                  Maternity/Baby - Looking for someone to caputre Baby before
                  and after the birth?This is where you want to be!
                </li>
                <li>
                  Family - Whether it's you and your significant other, or you
                  and the kids, even the entire extended family, we've got you
                  covered with our Family Photographers
                </li>
                <li>
                  Head Shot - Corporate or Artistic, there are many talented
                  headshot photgraphers in you area!
                </li>
                <li>
                  Pet - Don't think that this is just limited to your pup and
                  kitten, you got a horse a pig or even a snake - I'm sure we've
                  got someone who'd love to snap their portrait.
                </li>
                <li>
                  Other - Something off the beaten path?Maybe your home, car, or
                  airplane - you might be looking for someone right here!
                </li>
              </ul>
              <p>
                {" "}
                Odds are you'll find the perfect person amoung our talented
                professionals!
              </p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: primaryLight,
              borderStyle: "solid",
              borderColor: primaryDark,
              borderWidth: "5px",
              borderRadius: "10px",
            }}
          >
            {loading ? <div>Loading...</div> : <Photographers users={users} />}
          </Box>
        </Grid>
      </Grid>
      {Auth.loggedIn() ? null : (
        <>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: primaryLight,
                borderStyle: "solid",
                borderColor: primaryDark,
                borderWidth: "5px",
                borderRadius: "10px",
              }}
            >
              <FormControl
                className="type"
                sx={{
                  m: 1,
                  minWidth: 120,
                }}
              >
                <h1> Find some one you like?</h1>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: primaryDark,
                  }}
                >
                  <Link href="/products" color="inherit" underline="none">
                    Book a Reservation
                  </Link>
                </Button>
              </FormControl>
            </Box>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Home;
