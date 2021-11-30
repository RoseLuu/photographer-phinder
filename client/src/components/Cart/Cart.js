import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
// import { commerce } from "../../../lib/commerce";
import useStyles from "./style";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const EmptyCard = () => {
    return (
      <Typography variant="subtitle1">
        Opps! You haven't choose any photographer yet!{" "}
        <Link to="/products" className={classes.link}>
          Start select your photographer
        </Link>
      </Typography>
    );
  };
  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                i={item}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={onEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              component={Link}
              to={{ pathname: cart.hosted_checkout_url }}
              target="_blank"
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Container>
        <div className={classes.toolbar}>
          <Typography className={classes.title} variant="h4" gutterBottom>
            Your Choice of Photographer
          </Typography>
          {cart.total_items > 0 ? <FilledCart /> : <EmptyCard />}
        </div>
        &nbsp;
      </Container>
      &nbsp;
    </>
  );
};
export default Cart;
