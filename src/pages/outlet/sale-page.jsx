import { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Stack,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/Product/card-content";
import { productData } from "../../utils/product-data";
import useResponsive from "../../hooks/useResponsive";
import { PATH_PAGE } from "../../routers/path";
const SalePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMakeupPage = location.pathname === "/makeup";
  const isSkincarePage = location.pathname === "/skincare";
  const [openMakeup, setOpenMakeup] = useState(false);
  const [openSkinCare, setOpenSkinCare] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [sortType, setSortType] = useState("Best Selling");
  const [selectedType, setSelectedType] = useState("");

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

  // Xử lý sắp xếp sản phẩm
  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortType(sortValue);

    let sortedProducts = [...filteredProducts];
    switch (sortValue) {
      case "Price: Low to High":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "Price: High to Low":
        sortedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "Best Selling":
        sortedProducts.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  // Xử lý click vào category từ sidebar

  // Xử lý click vào type từ sidebar
  const handleTypeClick = (type) => {
    setSelectedType(type);
    let filtered = type
      ? productData.filter((product) => product.type === type)
      : productData;

    // Áp dụng sort hiện tại cho kết quả lọc
    const sortedFiltered = [...filtered];
    switch (sortType) {
      case "Price: Low to High":
        sortedFiltered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "Price: High to Low":
        sortedFiltered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "Best Selling":
        sortedFiltered.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(sortedFiltered);
  };

  const isMd = useResponsive("down", "md");
  const Filter = () => {
    return (
      <Box sx={{ width: "200px", paddingY: 3 }}>
        <List>
          {/* All Products option */}
          <ListItem
            component="button"
            onClick={() => handleTypeClick("")}
            sx={{
              py: 0,
              minHeight: "32px",
              color: selectedType === "" ? "var(--primary-color)" : "inherit",
            }}
          >
            <ListItemText
              primary="All Products"
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

          {/* Trang Makeup: hiển thị trực tiếp items */}
          {isMakeupPage && (
            <List component="div">
              {productCategories["Make up"].map((item) => (
                <ListItem
                  component="button"
                  key={item}
                  onClick={() => handleTypeClick(item)}
                  sx={{
                    pl: 4,
                    py: 0,
                    minHeight: "28px",
                    color:
                      selectedType === item
                        ? "var(--primary-color)"
                        : "inherit",
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
                  onClick={() => handleTypeClick(item)}
                  sx={{
                    pl: 4,
                    py: 0,
                    minHeight: "28px",
                    color:
                      selectedType === item
                        ? "var(--primary-color)"
                        : "inherit",
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
                      onClick={() => handleTypeClick(item)}
                      sx={{
                        pl: 4,
                        py: 0,
                        minHeight: "28px",
                        color:
                          selectedType === item
                            ? "var(--primary-color)"
                            : "inherit",
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
                      onClick={() => handleTypeClick(item)}
                      sx={{
                        pl: 4,
                        py: 0,
                        minHeight: "28px",
                        color:
                          selectedType === item
                            ? "var(--primary-color)"
                            : "inherit",
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
            </>
          )}
        </List>
      </Box>
    );
  };

  return (
    <div className={"flex flex-col bg-[#f5e5d8] pt-10"}>
      <Stack direction="row" justifyContent="left" alignItems="center">
        {location.pathname !== PATH_PAGE.main && (
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
            <IconButton onClick={() => navigate(-1)}>
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
        )}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderTop: "1px solid #A78A7F",
          borderBottom: "1px solid #A78A7F",
          py: 2,
          px: 3,
        }}
      >
        <Typography>{filteredProducts.length} items</Typography>

        <FormControl
          variant="standard"
          sx={{
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
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
            value={sortType}
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
        {!isMd && <Filter />}
        {/* Product Grid */}
        <Box sx={{ flexGrow: 1, paddingX: 3 }}>
          {isMd && <Filter />}
          <div
            className={
              isMd
                ? "grid grid-cols-1 bg-[#f5e5d8]"
                : "grid grid-cols-4 bg-[#f5e5d8]"
            }
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                pathname={location.pathname}
              />
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default SalePage;
