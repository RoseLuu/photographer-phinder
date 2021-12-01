import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { teal, indigo } from "@mui/material/colors";
// import { findByState } from '../utils/API'
// import SearchResults from './SearchResults';
// import Profile from "./Profile"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";

const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondaryLight = teal[200];

const Photographers = ({ users }) => {
  if (!users.length) {
    return <h3>No photgraphers Yet</h3>;
  }
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
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
          {users &&
            users.map((user) => (
              <Card
                sx={{
                  maxWidth: 345,
                  bgcolor: secondaryLight,
                  borderColor: primaryDark,
                  borderWidth: "5px",
                  borderRadius: "10px",
                  margin: "5px",
                }}
                key={user._id}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user.image}
                    alt=""
                  />
                  <CardContent
                    sx={{
                      bgcolor: secondaryLight,
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      Name : {user.companyName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Specialty: {user.photoType}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Location : {user.location}
                    </Typography>
                    <Link to={`/profiles/${user.username}`}>
                      {/* <Button></Button> */}
                      View more of this photographers information!
                    </Link>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Photographers;
