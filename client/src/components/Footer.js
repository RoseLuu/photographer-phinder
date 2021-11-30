import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";
import { teal, indigo } from '@mui/material/colors';

const primary = indigo[500]
const primaryLight = indigo[200]
const primaryDark = indigo[900]
const secondary = teal[500]
const secondaryLight = teal[200]
const secondaryDark = teal[700]

export default function Footer() {
    return (
        <Box
            px={{ xs: 3, sm: 5 }}
            py={{ xs: 5, sm: 5 }}
            sx={{ bgcolor: secondaryDark, color: "white" }}
        // color="white"
        >
            <Container maxWidth="lg" sx={{
                bgcolor: secondaryDark
            }}>
                <Typography variant="body1" textAlign="center" sx={{ bgcolor: secondaryDark }}>
                    Copyright ©{" "}
                    <Link
                        href="https://github.com/cianfich1016/Photographer-Phinder"
                        color="inherit"
                        underline="none"
                        sx={{
                            bgcolor: secondaryDark
                        }}
                    >
                        Github
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
}
