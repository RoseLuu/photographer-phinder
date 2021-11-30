import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./style";
//i.image.url
const CartItem = ({ i, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={i.image.url} alt={i.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{i.name}</Typography>
        <Typography variant="h6">
          {i.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(i.id, i.quantity - 1)}
          >
            -
          </Button>
          <Typography>{i.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(i.id, i.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(i.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
