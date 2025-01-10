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
  const isMakeupPage = location.pathname === "/makeup";
  const isSkincarePage = location.pathname === "/skincare";
  const [openMakeup, setOpenMakeup] = useState(false);
  const [openSkinCare, setOpenSkinCare] = useState(false);
  const [pathname, setPathname] = useState("");

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
    setPathname(location.pathname);
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
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                onClick={() => navigate(`/product-detail/${index}`)}
              >
                <ProductCard product={product} pathname={location.pathname} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SalePage;
