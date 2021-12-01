import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@mui/material/Link";
import { teal } from "@mui/material/colors";
import Auth from "../utils/auth";

const secondaryDark = teal[700];

const Navbar = ({ totalItems }) => {
  // set modal display state

  // const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClick={handleMobileMenuClose}
    >
      {Auth.loggedIn() ? (
        <div>
          <MenuItem>
            <IconButton size="large" aria-label="" color="inherit">
              <AccountCircle />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Link onClick={Auth.logout} color="inherit">
                <LogoutIcon />
              </Link>
            </IconButton>
          </MenuItem>
        </div>
      ) : (
        <div>
          {" "}
          <MenuItem>
            <IconButton size="large" aria-label="" color="inherit">
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Link href="/login" color="inherit">
                <LoginIcon />
              </Link>
            </IconButton>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static" style={{ background: secondaryDark }}>
          <Toolbar>
            <Typography>
              <Link
                variant="h6"
                noWrap
                //   component="div"
                color="inherit"
                underline="hover"
                href="/"
              >
                {"Photographer Phinder"}
              </Link>
            </Typography>
            {Auth.loggedIn() ? (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton size="large" aria-label="" color="inherit">
                    <Link href="/profile" color="inherit">
                      <AccountCircle />
                    </Link>
                  </IconButton>
                  &nbsp;
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <Link onClick={Auth.logout} color="inherit">
                      <LogoutIcon />
                    </Link>
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton size="large" aria-label="" color="inherit">
                    <Badge badgeContent={totalItems} color="error">
                      <Link href="/cart" color="inherit">
                        <ShoppingCartIcon />
                      </Link>
                    </Badge>
                  </IconButton>
                  &nbsp;
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <Link href="/login" color="inherit">
                      <LoginIcon />
                    </Link>
                  </IconButton>
                </Box>
              </>
            )}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
    </>
  );
};
export default Navbar;
