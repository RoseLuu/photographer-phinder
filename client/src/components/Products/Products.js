import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Product from "./Product/Product.js";
import useStyles from "./style";
import SearchProduct from "../Search";
// import { teal, indigo } from "@mui/material/colors";
//paddingBottom:'20px', paddingTop: "20px"
const Products = ({ onAddToCart, categories }) => {
  const box = useStyles();
  const [searchResult, setSearchResult] = useState([]);
  // const primary = indigo[500];
  // const primaryLight = indigo[200];
  // const primaryDark = indigo[900];
  // const secondary = teal[500];
  // const secondaryLight = teal[200];
  return (
    <>
      <SearchProduct
        categories={categories}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        onAddToCart={onAddToCart}
      />
      {!searchResult.length && (
        <Container
        // maxWidth="xxl"
        // sx={{
        //   bgcolor: secondaryLight,
        // }}
        >
          <div
            styles={{
              paddingBottom: "20px",
            }}
          >
            {categories
              .slice(0)
              .reverse()
              .map((category, index) => {
                return category.productsData.length ? (
                  <div
                    styles={{
                      backgroundImage:
                        index % 2 !== 0
                          ? "linear-gradient(to bottom right, #3d4a5d, #3d4a5d, #bb86fc"
                          : "",
                    }}
                  >
                    <div className={box.content}>
                      <div className={box.toolbar}>
                        <Typography
                          variant="h4"
                          styles={{
                            paddingBottom: "20px",
                            paddingTop: "20px",
                          }}
                        >
                          {category.name}
                        </Typography>
                        <Grid container justifyContent="center" spacing={4}>
                          {category.productsData.map((photo) => (
                            <Grid
                              item
                              key={photo.id}
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                            >
                              <Product
                                photo={photo}
                                onAddToCart={onAddToCart}
                                categoryName={category.name}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
          </div>
        </Container>
      )}
    </>
  );
};
export default Products;
