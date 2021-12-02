import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { teal, indigo } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

// const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
// const secondary = teal[500];
const secondaryLight = teal[200];

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    companyName: "",
    bio: "",
    photoType: "",
    location: "",
    link: "",
    reservationCost: "",
    image: "",
    showPassword: false,
  });

  const [validated] = useState(false);
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(values);

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    console.log(data);

    try {
      const { data } = await addUser({
        variables: { ...values },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: secondaryLight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <Box
          component="form"
          maxWidth="lg"
          onSubmit={handleFormSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            justifyContent: "center",
            p: 2,
            m: 2,
            bgcolor: primaryLight,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
              <h1>Photographer Sign Up!</h1>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="UserName"
                placeholder="UserName"
                name="username"
                type="text"
                defaultValue={values.username}
                onChange={handleChange}
              />
              {/* <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                defaultValue={values.email}
                name="email"
                type="email"
                onChange={handleChange}
              />
              {/* <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Password"
                defaultValue={values.password}
                name="password"
                type="password"
                onChange={handleChange}
              />
              {/* <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                type="text"
                defaultValue={values.companyName}
                onChange={handleChange}
                name="companyName"
              />
              {/* <input
                className="form-input"
                placeholder="Your Company"
                name="companyName"
                type="text"
                value={values.companyName}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                type="text"
                defaultValue={values.location}
                onChange={handleChange}
                name="location"
              />
              {/* <input
                className="form-input"
                placeholder="Your State"
                name="location"
                type="text"
                value={values.location}
                onChange={handleChange}
              /> */}
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="PhotoType"
                variant="outlined"
                type="text"
                defaultValue={values.photoType}
                onChange={handleChange}
                name="photoType"
              />
              {/* <input
                className="form-input"
                placeholder="Your Specialty"
                name="photoType"
                type="text"
                value={values.photoType}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Link"
                variant="outlined"
                type="text"
                defaultValue={values.link}
                onChange={handleChange}
                name="link"
              />
              {/* <input
                className="form-input"
                placeholder="Your URL"
                name="link"
                type="text"
                value={values.link}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Reservation Fee"
                variant="outlined"
                type="text"
                value={values.reservationCost}
                onChange={handleChange}
                name="reservationCost"
              />

              {/* <input
                className="form-input"
                placeholder="Your Reservation Fee"
                name="reservationCost"
                type="text"
                value={values.reservationCost}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Bio"
                variant="outlined"
                type="text"
                defaultValue={values.bio}
                onChange={handleChange}
                name="bio"
              />
              {/* <input
                className="bio"
                placeholder="Your Bio"
                name="bio"
                type="text"
                value={values.bio}
                onChange={handleChange}
              /> */}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p id="pictureMsg">
                {" "}
                Please email up to 5 images for approval to:{" "}
                <a
                  className="mailto"
                  href="mailto:photographerphinder@gmail.com"
                >
                  photographerphinder @gmail.com
                </a>{" "}
              </p>
              <Button
                type="submit"
                className="signup"
                sx={{
                  bgcolor: primaryDark,
                  display: "flex",
                  flexDirection: "flex-end",
                  p: 2,
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
            {/* // </form> */}
          </Grid>
        </Box>
      )}
    </Container>
  );
};
export default SignUp;
