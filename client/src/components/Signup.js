import React, { useState } from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
// import Input from '@mui/material/Input';
import Grid from "@mui/material/Grid";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from '@mui/material/FormHelperText';
// // import Link from "@mui/material/Link";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { teal, indigo } from "@mui/material/colors";


// import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondary = teal[500];
const secondaryLight = teal[200];

//this is a post

// const photoType = [
//     {
//         value: "Wedding",
//         label: "Wedding",
//     },
//     {
//         value: "Maternity",
//         label: "Maternity",
//     },
//     {
//         value: "Family",
//         label: "Family",
//     },
//     {
//         value: "HeadShot",
//         label: "HeadShot",
//     },
//     {
//         value: "Pet",
//         label: "Pet",
//     },
//     {
//         value: "Other",
//         label: "Other",
//     },
// ];

// const locations = [
//     {
//         value: "Alabama",
//         label: "Alabama",
//     },
//     {
//         value: "Alaska",
//         label: "Alaska",
//     },
//     {
//         value: "Arizona",
//         label: "Arizona",
//     },
//     {
//         value: "Arkansas",
//         label: "Arkansas",
//     },
//     {
//         value: "California",
//         label: "California",
//     },
//     {
//         value: "Colorado",
//         label: "Colorado",
//     },
//     {
//         value: "Connecticut",
//         label: "Connecticut",
//     },
//     {
//         value: "Delaware",
//         label: "Delaware",
//     },
//     {
//         value: "Florida",
//         label: "Florida",
//     },
//     {
//         value: "Georgia",
//         label: "Georgia",
//     },
//     {
//         value: "Idaho",
//         label: "Idaho",
//     },
//     {
//         value: "Illinois",
//         label: "Illinois",
//     },
//     {
//         value: "Indiana",
//         label: "Indiana",
//     },
//     {
//         value: "Iowa",
//         label: "Iowa",
//     },
//     {
//         value: "Kansas",
//         label: "Kansas",
//     },
//     {
//         value: "Kentucky",
//         label: "Kentucky",
//     },
//     {
//         value: "Maine",
//         label: "Maine",
//     },
//     {
//         value: "Maryland",
//         label: "Maryland",
//     },
//     {
//         value: "Massachusetts",
//         label: "Massachusetts",
//     },
//     {
//         value: "Michigan",
//         label: "Michigan",
//     },
//     {
//         value: "Minnesota",
//         label: "Minnesota",
//     },
//     {
//         value: "Mississippi",
//         label: "Mississippi",
//     },
//     {
//         value: "Missouri",
//         label: "Missouri",
//     },
//     {
//         value: "Montana",
//         label: "Montana",
//     },
//     {
//         value: "Nebraska",
//         label: "Nebraska",
//     },
//     {
//         value: "Nevada",
//         label: "Nevada",
//     },
//     {
//         value: "New Hampshire",
//         label: "New Hampshire",
//     },
//     {
//         value: "New Jersey",
//         label: "New Jersey",
//     },
//     {
//         value: "New Mexico",
//         label: "New Mexico",
//     },
//     {
//         value: "New York",
//         label: "New York",
//     },
//     {
//         value: "North Carolina",
//         label: "North Carolina",
//     },
//     {
//         value: "North Dakota",
//         label: "North Dakota",
//     },
//     {
//         value: "Ohio",
//         label: "Ohio",
//     },
//     {
//         value: "Oklahoma",
//         label: "Oklahoma",
//     },
//     {
//         value: "Oregon",
//         label: "Oregon",
//     },
//     {
//         value: "Pennsylvania",
//         label: "Pennsylvania",
//     },
//     {
//         value: "Rhode Island",
//         label: "Rhode Island",
//     },
//     {
//         value: "South Carolina",
//         label: "South Carolina",
//     },
//     {
//         value: "South Dakota",
//         label: "South Dakota",
//     },
//     {
//         value: "Tennessee",
//         label: "Tennessee",
//     },
//     {
//         value: "Texas",
//         label: "Texas",
//     },
//     {
//         value: "Utah",
//         label: "Utah",
//     },
//     {
//         value: "Vermont",
//         label: "Vermont",
//     },
//     {
//         value: "Virginia",
//         label: "Virginia",
//     },
//     {
//         value: "Washington",
//         label: "Washington",
//     },
//     {
//         value: "West Virginia",
//         label: "West Virginia",
//     },
//     {
//         value: "Wisconsin",
//         label: "Wisconsin",
//     },
//     {
//         value: "Wyoming",
//         label: "Wyoming",
//     },
// ];
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
        console.log(values)

        setValues({
            ...values,
            [name]: value,
        });
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setValues({ ...values, [name]: value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const handleFormSubmit = async e => {
        e.preventDefault();
        console.log(values)
        console.log(data)

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        // console.log(values);

        try {
            const { data } = await addUser({
                variables: { ...values },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
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
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
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
                        <Grid item xs={12} >
                            <h1>Photographer Sign Up!</h1>
                        </Grid>
                        {/* // <form validated={validated} onSubmit={handleFormSubmit}> */}

                        {/* <Grid item xs={4} >
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="UserName required"
                                    placeholder="UserName"
                                    name="username"
                                    type="text"
                                    value={values.username}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email required"
                                    placeholder="Email"
                                    value={values.email}
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        Password
                                    </InputLabel>
                                    <OutlinedInput

                                        required
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? "text" : "password"}
                                        value={values.password}
                                        name="password"
                                        onChange={handleChange("password")}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-basic"
                                    label="Company Name"
                                    variant="outlined"
                                    type="text"
                                    value={values.companyName}
                                    name="companyName"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    sx={{ m: 1, width: "25ch" }}>
                                    <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                                    <Select
                                        id="outlined-select-photo"
                                        select
                                        label="Select"
                                        value={values.photoType}
                                        name="photoType"
                                        type="text"
                                        onChange={handleChange}
                                        helperText="Please select your specialty"
                                    >
                                        {photoType.map((photos) => (
                                            <MenuItem key={photos.value} value={photos.value}>
                                                {photos.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Location</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    sx={{ m: 1, width: "25ch" }}>
                                    <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                                    <Select
                                        id="outlined-select-location"
                                        select
                                        label="Select"
                                        value={values.location}
                                        name="location"
                                        type="text"
                                        onChange={handleChange}
                                        helperText="Please select your state"
                                    >
                                        {locations.map((state) => (
                                            <MenuItem key={state.value} value={state.value}>
                                                {state.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Location</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Please provide a link to your work"
                                    multiline
                                    rows={10}
                                    placeholder="www.yourwork.com"
                                    value={values.link}
                                    name="link"
                                    type="text"
                                    onChange={handleChange}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id="outlined-number"
                                    label="Reservation Cost"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    rows={10}
                                    multiline
                                    value={values.reservationCost}
                                    name="reservationCost"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Bio"
                                    multiline
                                    rows={10}
                                    placeholder="Tell us about you..."
                                    value={values.bio}
                                    name="bio"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end"
                                }}>
                                <p id="pictureMsg">
                                    {" "}
                                    Please email up to 5 images for submission and approval to:{" "}
                                    <a className="mailto" href="mailto:photographerphinder@gmail.com">
                                        photographerphinder@gmail.com
                                    </a>{" "}
                                </p>
                                <Button
                                    variant="contained"
                                    // onClick={handleFormSubmit}
                                    type="submit"
                                    sx={{
                                        bgcolor: primaryDark,
                                        display: "flex",
                                        flexDirection: "flex-end",
                                        p: 2
                                    }}>
                                    {/* <Link href="/profile" underline="none" color="inherit">
                                        Create Your Profile
                                    </Link> */}
                        {/* </Button>
                            </Grid> */}
                        <input
                            className="form-input"
                            placeholder="Your username"
                            name="username"
                            type="text"
                            value={values.username}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your Company"
                            name="companyName"
                            type="text"
                            value={values.companyName}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your Bio"
                            name="bio"
                            type="text"
                            value={values.bio}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your State"
                            name="location"
                            type="text"
                            value={values.location}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your Specialty"
                            name="photoType"
                            type="text"
                            value={values.photoType}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your URL"
                            name="link"
                            type="text"
                            value={values.link}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            placeholder="Your Reservation Fee"
                            name="reservationCost"
                            type="text"
                            value={values.reservationCost}
                            onChange={handleChange}
                        />
                        <p id="pictureMsg">
                            {" "}
                            Please email up to 5 images for submission and approval to:{" "}
                            <a className="mailto" href="mailto:photographerphinder@gmail.com">
                                photographerphinder@gmail.com
                            </a>{" "}
                        </p>
                        <button
                            className="btn btn-block btn-info"
                            style={{ cursor: 'pointer' }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </Grid>
                </Box>
            )}
        </Container>
    );
};

export default SignUp;
