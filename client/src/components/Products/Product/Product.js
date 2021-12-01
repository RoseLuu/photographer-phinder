import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useStyles from "./styles";
import { PopupButton } from "react-calendly";
import { Link } from "react-router-dom";

const Product = ({ photo, onAddToCart, categoryName }) => {
  const classes = useStyles();
  const str = photo.name.split(" ").join("").toLowerCase();
  // str.split(" ").join("").toLowerCase();
  const url = `https://calendly.com/${str}`;
  console.log(url);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo.image.url}
        title={photo.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {photo.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {photo.price.formatted_with_symbol}
          </Typography>
        </div>
        {/* <Typography variant="body2" gutterBottom>
          {photo.categories}
        </Typography> */}
        {/* <Typography
          dangerouslySetInnerHTML={{ __html: photo.categories[0].name }}
          variant="body1"
        /> */}
        <Typography
          dangerouslySetInnerHTML={{ __html: photo.description }}
          variant="body2"
        />
        <PopupButton
          url={`https://calendly.com/${str}`}
          text="Select appointment day"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="outlined"
          component={Link}
          to={`/product-view/${photo.id}`}
        >
          {" "}
          View{" "}
        </Button>
        <IconButton
          aria-label="Add to Card"
          onClick={() => onAddToCart(photo.id, 1)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
