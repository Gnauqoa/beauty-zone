import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Stack,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import ProductDefault from "../../assets/products/default-product.png";
import ProductImage1 from "../../assets/products/product-img.png";
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/Product/card-content";

const SalePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const productImages = [ProductDefault, ProductImage1];

  const [products, setProducts] = useState([
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: productImages,
    },
  ]);
  const sortOptions = [
    "Best Selling",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleSortChange = (event) => {
    // Handle Sort Change
  };
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5e5d8",
      }}
    >
      <Stack direction="row" justifyContent="left" alignItems="center">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "var(--primary-color)",
            fontFamily: "Montserrat",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => navigate("/new-collection")}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          {location.pathname.split("/").pop() ===
          "glasting-melting-balm-trio-set"
            ? "ROM&ND - GLASTING MELTING BALM"
            : ""}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderTop: "1px solid #A78A7F",
          borderBottom: "1px solid #A78A7F",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            fontFamily: "Montserrat",
            ml: 2,
          }}
        >
          {products.length} items
        </Typography>

        <FormControl
          variant="standard"
          sx={{ minWidth: 120, display: "flex", flexDirection: "row" }}
        >
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: "medium",
              fontFamily: "Montserrat",
              mr: 1,
            }}
          >
            Sort By -
          </Typography>
          <Select
            variant="standard"
            defaultValue={sortOptions[0]}
            onChange={handleSortChange}
            sx={{
              fontSize: "1.25rem",
              fontWeight: "medium",
              color: "black",
              border: "none",
              "&:before": { borderBottom: "none" },
              "&:after": { borderBottom: "none" },
              "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
            }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Box sx={{ flexGrow: 1, paddingX: 3, mb: 15 }}>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SalePage;
