import React, { useState } from "react";
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
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const SalePage = () => {
  const [openMakeup, setOpenMakeup] = useState(false);
  const [openSkinCare, setOpenSkinCare] = useState(false);
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
  const products = Array(8).fill({
    name: "Glasting Melting Balm #Original Series",
    price: "13.99",
    originalPrice: "19.99",
    rating: "4.9",
    image: "https://i.imgur.com/mY1828l.png",
  });

  const sortOptions = [
    "Best Selling",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleSortChange = (event) => {
    // Handle Sort Change
  };

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f5e5d8",
        paddingY: 3,
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "200px",
          paddingX: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "1.1rem", mb: 1 }}
        >
          <Typography
            variant="span"
            sx={{ fontSize: "0.7rem", fontWeight: "normal" }}
          >
            SALE
          </Typography>
        </Typography>
        <Typography sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
          {" "}
          8 Items{" "}
        </Typography>

        <List>
          <ListItem button onClick={handleMakeupClick} sx={{ paddingY: 0 }}>
            <ListItemText
              primary="Make up"
              sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
            />
            {openMakeup ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMakeup} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {productCategories["Make up"].map((item) => (
                <ListItem button key={item} sx={{ pl: 4, paddingY: 0 }}>
                  <ListItemText primary={item} sx={{ fontSize: "0.9rem" }} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem button onClick={handleSkinCareClick} sx={{ paddingY: 0 }}>
            <ListItemText
              primary="Skin cares"
              sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
            />
            {openSkinCare ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSkinCare} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {productCategories["Skin cares"].map((item) => (
                <ListItem button key={item} sx={{ pl: 4, paddingY: 0 }}>
                  <ListItemText primary={item} sx={{ fontSize: "0.9rem" }} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>

      {/* Product Grid */}
      <Box sx={{ flexGrow: 1, paddingX: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by-select"
              defaultValue={sortOptions[0]}
              onChange={handleSortChange}
              label="Sort By"
            >
              {sortOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  padding: 1.5,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
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
                    }}
                  >
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton>
                      <ShoppingCartOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Typography
                  variant="h6"
                  mt={1}
                  sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.7rem", color: "gray" }}
                >
                  From{" "}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      display: "inline",
                      fontSize: "0.7rem",
                      color: "#000",
                    }}
                  >
                    ${product.price} USD
                  </Typography>{" "}
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      display: "inline",
                      fontSize: "0.7rem",
                      color: "gray",
                    }}
                  >
                    ${product.originalPrice}{" "}
                  </Typography>
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                  <Typography
                    component="span"
                    sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
                  >
                    {product.rating}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{ fontSize: "0.8rem", color: "#ff9529" }}
                  >
                    ★
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SalePage;
