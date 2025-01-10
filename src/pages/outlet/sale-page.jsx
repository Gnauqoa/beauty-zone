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
import ProductImage from "../../assets/products/product-image.png";
import StarIcon from "@mui/icons-material/Star";
import { useLocation } from "react-router-dom";

const SalePage = () => {
  const location = useLocation();
  const isMakeupPage = location.pathname === "/makeup";
  const isSkincarePage = location.pathname === "/skincare";
  const [openMakeup, setOpenMakeup] = useState(false);
  const [openSkinCare, setOpenSkinCare] = useState(false);

  const [products, setProducts] = useState([
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
    {
      name: "Glasting Melting Balm #Original Series",
      price: "13.99",
      originalPrice: "19.99",
      rating: "4.9",
      image: ProductImage,
    },
  ]);
  const handleMakeupClick = () => {
    setOpenMakeup(!openMakeup);
  };
  const handleSkinCareClick = () => {
    setOpenSkinCare(!openSkinCare);
  };

  const productCategories = {
    "Make up": ["Lips", "Eyes", "Face", "Others"],
    "Skin cares": ["Face", "Body", "Others"],
  };

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
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          {location.pathname === "/sale"
            ? "SALE"
            : location.pathname === "/new"
            ? "NEW"
            : location.pathname === "/best-sellers"
            ? "BEST SELLERS"
            : location.pathname === "/makeup"
            ? "MAKEUP"
            : location.pathname === "/skincare"
            ? "SKINCARE"
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
      {/* Sidebar */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "200px", paddingY: 3 }}>
          <List>
            {/* Trang Makeup: hiển thị trực tiếp items */}
            {isMakeupPage && (
              <List component="div">
                {productCategories["Make up"].map((item) => (
                  <ListItem
                    component="button"
                    key={item}
                    sx={{
                      pl: 4,
                      py: 0,
                      minHeight: "28px",
                    }}
                  >
                    <ListItemText
                      primary={item}
                      sx={{
                        margin: 0,
                        "& .MuiTypography-root": {
                          fontSize: "0.9rem",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            )}

            {/* Trang Skincare: hiển thị trực tiếp items */}
            {isSkincarePage && (
              <List component="div">
                {productCategories["Skin cares"].map((item) => (
                  <ListItem
                    component="button"
                    key={item}
                    sx={{
                      pl: 4,
                      py: 0,
                      minHeight: "28px",
                    }}
                  >
                    <ListItemText
                      primary={item}
                      sx={{
                        margin: 0,
                        "& .MuiTypography-root": {
                          fontSize: "0.9rem",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            )}

            {/* Các trang khác: hiển thị có thể bấm mở rộng */}
            {!isMakeupPage && !isSkincarePage && (
              <>
                <ListItem
                  component="button"
                  onClick={handleMakeupClick}
                  sx={{
                    py: 0,
                    minHeight: "32px",
                  }}
                >
                  <ListItemText
                    primary="Make up"
                    sx={{
                      margin: 0,
                      minWidth: "80px",
                      "& .MuiTypography-root": {
                        fontSize: "0.9rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  {openMakeup ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMakeup} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {productCategories["Make up"].map((item) => (
                      <ListItem
                        component="button"
                        key={item}
                        sx={{
                          pl: 4,
                          py: 0,
                          minHeight: "28px",
                        }}
                      >
                        <ListItemText
                          primary={item}
                          sx={{
                            margin: 0,
                            "& .MuiTypography-root": {
                              fontSize: "0.9rem",
                              fontFamily: "Montserrat",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>

                <ListItem
                  component="button"
                  onClick={handleSkinCareClick}
                  sx={{ py: 0, minHeight: "32px" }}
                >
                  <ListItemText
                    primary="Skin cares"
                    sx={{
                      margin: 0,
                      minWidth: "80px",
                      "& .MuiTypography-root": {
                        fontSize: "0.9rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  {openSkinCare ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSkinCare} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {productCategories["Skin cares"].map((item) => (
                      <ListItem
                        component="button"
                        key={item}
                        sx={{
                          pl: 4,
                          py: 0,
                          minHeight: "28px",
                        }}
                      >
                        <ListItemText
                          primary={item}
                          sx={{
                            margin: 0,
                            "& .MuiTypography-root": {
                              fontSize: "1rem",
                              fontWeight: "bold",
                              fontFamily: "Montserrat",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </List>
        </Box>

        {/* Product Grid */}
        <Box sx={{ flexGrow: 1, paddingX: 3 }}>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    padding: 1.5,
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5em",
                        gap: 10,
                      }}
                    >
                      <IconButton>
                        <FavoriteBorderIcon sx={{ color: "black" }} />
                      </IconButton>
                      <IconButton>
                        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    mt={1}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.625rem",
                      fontFamily: "Montserrat",
                      color: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      fontSize: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: "black",
                      fontFamily: "Montserrat",
                    }}
                  >
                    From
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        fontFamily: "Montserrat",
                        color: "var(--primary-color)",
                      }}
                    >
                      ${product.price}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        fontFamily: "Montserrat",
                      }}
                    >
                      USD
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        textDecoration: "line-through",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        color: "#A78A7F",
                        fontFamily: "Montserrat",
                      }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{
                      fontSize: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <StarIcon
                      sx={{
                        fontSize: "1.25rem",
                        color: "#BF4342",
                      }}
                    />
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {product.rating}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SalePage;
