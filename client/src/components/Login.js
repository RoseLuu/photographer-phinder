import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Grid,
  Avatar,
  Typography,
  // Link,
} from "@material-ui/core";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import { useFormControl } from "@mui/material/FormControl";
// import Checkbox from "@material-ui/core/Checkbox";
// import { Input } from "@mui/material";
// import { InputLabel } from "@mui/material";
// import { FormHelperText } from "@mui/material";
// import { FormControl } from "@mui/material";
import Container from "@mui/material/Container";
// import { loginUser } from '../utils/API';

import { teal, indigo } from "@mui/material/colors";
const secondaryLight = teal[200];
const primary = indigo[500];

const LoginUser = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [showAlert, setShowAlert] = useState(false);
  const [validated] = useState(false);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  //   const [showAlert, setShowAlert] = useState(f

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

    //  check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData);

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "30px auto",
  };
  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: secondaryLight,
      }}
    >
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              className="login-form"
              color="inherit"
            >
              <Container
                variant="elevation"
                elevation={2}
                className="login-background"
                style={paperStyle}
              >
                <Grid item align="center">
                  <Avatar>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Log in
                  </Typography>
                </Grid>
                &nbsp;
                <Grid item>
                  {/* {data ? (
                                        <p>
                                            Success! You may now head{' '}
                                            <Link to="/">back to the homepage.</Link>
                                        </p>
                                    ) : ( */}
                  <form validated={validated} onSubmit={handleFormSubmit}>
                    {/* <Alert
                                            dismissible
                                            onClose={() => setShowAlert(false)}
                                            show={showAlert}
                                            variant="danger"
                                        >
                                            Something went wrong with your login credentials!
                                        </Alert> */}
                    {/* <Grid container direction="column" spacing={2}> */}
                    {/* <Grid item> */}
                    {/* <TextField sx={{
                                                        color: primary
                                                    }}
                                                        type="email"
                                                        placeholder="Email"
                                                        fullWidth
                                                        name="email"
                                                        variant="outlined"
                                                        value={userFormData.email}
                                                        onChange={handleChange}
                                                        required
                                                        autoFocus
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        sx={{
                                                            color: primary
                                                        }}
                                                        type="password"
                                                        placeholder="Password"
                                                        fullWidth
                                                        name="password"
                                                        variant="outlined"
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Grid> */}
                    {/* <Grid item>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        className="button-block"
                                                    >
                                                        Submit
                                                    </Button>
                                                </Grid>// */}
                    {/* </Grid> */}
                    <input
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={userFormData.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={userFormData.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  {/* )} */}
                </Grid>
                &nbsp;
                <Grid item>
                  <Typography>
                    {" "}
                    Don't have an account?
                    <Link to="/signup"> Sign Up </Link>
                  </Typography>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </Container>
  );
};

export default LoginUser;
