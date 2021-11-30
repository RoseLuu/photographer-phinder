import React, { useState } from "react";
import {
  Container,
  InputBase,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
import SearchByCategories from "./searchbycategories/searchByCate";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { commerce } from "../../lib/commerce";
// import Products from "../Products/Products";
import { Box } from "@mui/system";

const FilterPhotographer = ({
  categories,
  searchResult,
  setSearchResult,
  onAddToCart,
}) => {
  const defaultCategory = { id: 0, name: "All" };
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [keyword, setKeyword] = useState("");
  const [resultMess, setResultMess] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  const handleSelectChange = (event) => {
    const { value } = event.target;
    const category = categories.find((cat) => cat.id === value);
    if (value === 0) {
      setSelectedCategory(defaultCategory);
    } else {
      setSelectedCategory(category);
    }
  };
  const handleInputChange = (event) => {
    if (!keyword || !event.target.value) {
      setResultMess("");
      setSearchResult([]);
      setSelectedCategory(defaultCategory);
    }
    setKeyword(event.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (keyword) {
      try {
        const categoryId = selectedCategory.id
          ? { category_id: selectedCategory.id }
          : {};
        const { data } = await commerce.products.list({
          query: keyword,
          ...categoryId,
        });
        console.log({ data });
        console.log({ keyword });
        console.log({ selectedCategory });
        if (!data) {
          setResultMess(
            "Sorry! We have no matching photographer for your request"
          );
          setSearchResult([]);
          return;
        }
        setResultMess("");
        setSearchResult(data);
      } catch (error) {
        setSearchResult([]);
        console.log(error);
      }
    } else {
      setResultMess("You have to put on Location");
    }
  };
  // console.log(selectedCategory);
  console.log(searchResult);
  return (
    <>
      <div className="filter-bar">
        <Container>
          <Box
            component="form"
            className="root"
            sx={{
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onSubmit={onSubmit}
          >
            <SearchByCategories
              categories={[defaultCategory, ...categories]}
              selectedCategory={selectedCategory}
              onChange={handleSelectChange}
            />
            <InputBase
              className="input"
              onChange={handleInputChange}
              placeholder="Search for a photographer"
              inputProps={{ "aria-label": "Search for a photographer" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <p className="result-message"> {resultMess} </p>
        </Container>

        <div>
          <Grid container spacing={4}>
            {searchResult.map((photo) => (
              <Grid key={photo.id} item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia image={photo.image.url} title={photo.name} />
                  <CardContent>
                    <div>
                      <Typography variant="h6" gutterBottom>
                        {photo.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {photo.price.formatted_with_symbol}
                      </Typography>
                    </div>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: photo.description }}
                      variant="body2"
                    />
                  </CardContent>
                  <CardActions disableSpacing>
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
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};
export default FilterPhotographer;
