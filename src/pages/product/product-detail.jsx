import PropTypes from "prop-types";
import useResponsive from "../../hooks/useResponsive";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductImage1 from "../../assets/products/product-img.png";

import StarIcon from "@mui/icons-material/Star";
import ProductCard from "../../components/Product/card-content";
import ProductDefault from "../../assets/products/default-product.png";
import ReviewItem from "../../components/Product/review-item";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();
  const isMd = useResponsive("down", "md");

  const [productData] = useState(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const [images] = useState(productData.image || []);

  const productImages = [ProductDefault, ProductImage1];

  const review = {
    userAvatar: "path_to_avatar",
    username: "@ngheomamadep",
    rating: 5,
    title: "SO AMAZINGGGGGGG",
    content:
      "I am SO in love with this product. I got the shade 03 musky, and at first, I was a little worried about the shade match since I was ordering online, but the product images impressively matched the actual shade so well.",
  };

  // Xử lý next image
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev === images.length - 1 ? 0 : prev + 1;
      // Tự động scroll thumbnails nếu ảnh hiện tại nằm ngoài vùng nhìn thấy
      if (nextIndex >= startIndex + visibleThumbnails) {
        setStartIndex(nextIndex - visibleThumbnails + 1);
      } else if (nextIndex < startIndex) {
        setStartIndex(nextIndex);
      }
      return nextIndex;
    });
  };

  // Xử lý previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev === 0 ? images.length - 1 : prev - 1;
      // Tự động scroll thumbnails nếu ảnh hiện tại nằm ngoài vùng nhìn thấy
      if (nextIndex >= startIndex + visibleThumbnails) {
        setStartIndex(nextIndex - visibleThumbnails + 1);
      } else if (nextIndex < startIndex) {
        setStartIndex(nextIndex);
      }
      return nextIndex;
    });
  };

  // Xử lý click vào thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    // Đảm bảo thumbnail được chọn nằm trong vùng nhìn thấy
    if (index >= startIndex + visibleThumbnails) {
      setStartIndex(index - visibleThumbnails + 1);
    } else if (index < startIndex) {
      setStartIndex(index);
    }
  };

  const handleProductCardClick = () => {};

  const handleMouseMove = (e) => {
    // Lấy kích thước và vị trí của container
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Tính toán vị trí chuột tương đối
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Kiểm tra xem chuột có nằm trong vùng an toàn (giữa 2 nút)
    const safeZoneLeft = 60; // px từ mép trái
    const safeZoneRight = width - 60; // px từ mép phải
    const mouseX = e.clientX - left;

    if (mouseX > safeZoneLeft && mouseX < safeZoneRight) {
      setShowZoom(true);
      setPosition({ x, y });
    } else {
      setShowZoom(false);
    }
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  // Xử lý khi component unmount
  useEffect(() => {
    return () => {
      // Có thể thêm cleanup logic nếu cần
    };
  }, []);

  const handleBackClick = () => {
    // Lấy previousPath từ localStorage
    const previousPath =
      localStorage.getItem("previousPath") || "/new-collection";
    navigate(previousPath);
  };

  // Tính toán số lượng ảnh hiển thị
  const visibleThumbnails = 3;
  const [startIndex, setStartIndex] = useState(0);

  // Xử lý next/prev cho thumbnails
  const handleNextThumbnails = (e) => {
    e.stopPropagation();
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);

      // Nếu currentImageIndex là phần tử thứ 3 trở đi, dịch chuyển startIndex
      if (currentImageIndex >= 1) {
        // 0, 1, 2(thứ 3) -> dịch
        setStartIndex((prev) => Math.min(prev + 1, images.length));
      }
    }
  };

  const handlePrevThumbnails = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);

      // Khi scroll ngược, giảm startIndex nếu currentImage < startIndex + 1
      if (currentImageIndex <= startIndex + 1) {
        setStartIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5e5d8", pt: 5 }}>
      <Stack direction="row" alignItems="center">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "var(--primary-color)",
            fontFamily: "Montserrat",
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <IconButton onClick={handleBackClick}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          {productData.name}
        </Typography>
      </Stack>
      <Stack sx={{ px: 4 }}>
        <Stack direction={isMd ? "column" : "row"} spacing={4}>
          <Box sx={{ width: isMd ? "100%" : "30%" }}>
            <Box
              sx={{
                borderRadius: "30px",
                overflow: "hidden",
                mb: 2,
                position: "relative",
              }}
            >
              <Box
                onMouseEnter={() => setShowZoom(false)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    "& .navigation-arrows": {
                      opacity: 1,
                    },
                  },
                  cursor: "pointer",
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Product"
                  style={{
                    width: "448px",
                    height: "448px",
                    borderRadius: "30px",
                    objectFit: "fill",
                    borderTop: "8px solid var(--primary-color)",
                    borderLeft: "8px solid var(--primary-color)",
                    borderRight: "8px solid var(--primary-color)",
                    borderBottom: "40px solid var(--primary-color)",
                  }}
                />

                {/* Navigation Arrows */}
                <Box
                  className="navigation-arrows"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    px: 2,
                    zIndex: 3,
                  }}
                >
                  <IconButton
                    onClick={handlePrevImage}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                      },
                      width: 40,
                      height: 40,
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.2rem",
                        color: "var(--primary-color)",
                      },
                    }}
                  >
                    <ArrowBackIosIcon />
                  </IconButton>

                  <IconButton
                    onClick={handleNextImage}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                      },
                      width: 40,
                      height: 40,
                      "& .MuiSvgIcon-root": {
                        fontSize: "1.2rem",
                        color: "var(--primary-color)",
                      },
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>

                {/* Zoom overlay */}
                {showZoom && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${images[currentImageIndex]})`,
                      backgroundSize: "200%",
                      backgroundPosition: `${position.x}% ${position.y}%`,
                      backgroundRepeat: "no-repeat",
                      opacity: 1,
                      transition: "background-position 0.05s ease-out",
                      zIndex: 2,
                      transformOrigin: "center center",
                      willChange: "background-position",
                    }}
                  />
                )}
              </Box>
            </Box>

            {/* Thumbnail Navigation */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mt: 2 }}
            >
              <IconButton
                onClick={handlePrevThumbnails}
                disabled={currentImageIndex === 0}
                sx={{
                  color: "var(--primary-color)",
                  "&.Mui-disabled": {
                    color: "rgba(191, 67, 66, 0.3)",
                  },
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  overflow: "hidden",
                  width: `${
                    100 * Math.min(visibleThumbnails, images.length)
                  }px`,
                  transition: "transform 0.3s ease",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    transform: `translateX(-${startIndex * 104}px)`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {images.map((img, index) => (
                    <Box
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      sx={{
                        minWidth: 100,
                        height: 100,
                        borderRadius: "10px",
                        overflow: "hidden",
                        cursor: "pointer",
                        border:
                          currentImageIndex === index
                            ? "2px solid var(--primary-color)"
                            : "2px solid transparent",
                        opacity: currentImageIndex === index ? 1 : 0.7,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>

              <IconButton
                onClick={handleNextThumbnails}
                disabled={currentImageIndex === images.length - 1}
                sx={{
                  color: "var(--primary-color)",
                  "&.Mui-disabled": {
                    color: "rgba(191, 67, 66, 0.3)",
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Right Side - Product Info */}
          <Box sx={{ width: isMd ? "100%" : "70%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontFamily: "Montserrat",
                fontSize: "1.875rem",
                maxWidth: "800px",
                color: "#BF4342",
              }}
            >
              {productData.name}
            </Typography>

            <Box sx={{ mb: 3 }}>
              {productData.usage && (
                <Stack direction="column" spacing={1}>
                  {productData.usage.map((value, index) => (
                    <Typography
                      key={index}
                      variant="div"
                      sx={{
                        color: "black",
                        mb: 1,
                        fontFamily: "Montserrat",
                        fontWeight: "medium",
                        fontSize: "1.25rem",
                      }}
                    >
                      [
                      <Typography variant="span" sx={{ color: "#BF4342" }}>
                        {value.name}
                      </Typography>
                      ] {value.description}
                    </Typography>
                  ))}
                </Stack>
              )}
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              {productData.price} USD
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="button"
                startIcon={<FavoriteBorderIcon />}
                sx={{
                  borderColor: "#BF4342",
                  color: "#BF4342",
                  "&:hover": {
                    borderColor: "#BF4342",
                    backgroundColor: "rgba(191, 67, 66, 0.04)",
                  },
                }}
              >
                Favourite
              </Button>
              <Button
                variant="button"
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  color: "#BF4342",
                  "&:hover": {
                    bgcolor: "#a33736",
                  },
                }}
              >
                Get it now
              </Button>
            </Stack>
          </Box>
        </Stack>
        {/* Features Section */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            position: "relative",
            borderTop: "1px solid #A78A7F",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#BF4342",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontWeight: "bold",
              mb: 1,
              position: "absolute",
              top: -18,
              backgroundColor: "#f5e5d8",
              pr: 2,
            }}
          >
            Features
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
              pl: 4,
              ml: 2,
            }}
          >
            {(
              productData?.featured || [
                "The creamy matte texture is as soft and smooth as velvet, gliding effortlessly on the lips for a weightless, comfortable feel.",
                "The finish is smooth and silky, creating a trendy 'blur' effect, completely covering lip lines and imperfections.",
                "The color payoff is precise, delivering a fresh, radiant color with just one swipe.",
                "With impressive staying power of 4-6 hours, you can confidently wear it all day long.",
                "Especially, Romand Blur Fudge Tint 5gr does not dry out the lips, providing essential moisture to keep them soft.",
              ]
            ).map((value, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  py: 0.5,
                }}
              >
                <ListItemText
                  primary={value}
                  sx={{
                    "& .MuiTypography-root": {
                      fontFamily: "Montserrat",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Suggested Use Section */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            position: "relative",
            borderTop: "1px solid #A78A7F",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#BF4342",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontWeight: "bold",
              position: "absolute",
              top: -18,
              backgroundColor: "#f5e5d8",
              pr: 2,
            }}
          >
            Suggested Use
          </Typography>
          <List sx={{ fontFamily: "Montserrat" }}>
            {/* {(productData?.suggestedUse || suggestedUseLipstick).map(
              (value, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 0.5,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary={value}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "Montserrat",
                        fontSize: "1rem",
                      },
                    }}
                  />
                </ListItem>
              )
            )} */}
          </List>
        </Box>

        {/* Customer Review Section */}
        <Box
          sx={{
            mt: 4,
            pt: 2,
            position: "relative",
            borderTop: "1px solid #A78A7F",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#BF4342",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontWeight: "bold",
              position: "absolute",
              top: -18,
              backgroundColor: "#f5e5d8",
              px: 2,
            }}
          >
            {`Customer's Review`}
          </Typography>

          {/* Rating Summary */}
          <Stack
            direction={isMd ? "column" : "row"}
            spacing={4}
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <div className="flex flex-row gap-1">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: "#BF4342",
                  }}
                >
                  4.9
                </Typography>
                <StarIcon sx={{ color: "#BF4342" }} />
              </Stack>
              {!isMd && (
                <Typography
                  sx={{
                    color: "#666",
                    fontFamily: "Montserrat",
                  }}
                >
                  Based on 36 reviews
                </Typography>
              )}
            </div>
            <Stack spacing={0.5} sx={{ mb: 3, minWidth: "50%" }}>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Stack
                  key={rating}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      minWidth: 10,
                      fontFamily: "Montserrat",
                      color: "#BF4342",
                    }}
                  >
                    {rating}
                  </Typography>
                  <StarIcon
                    sx={{
                      fontSize: 16,
                      color: "#BF4342",
                    }}
                  />
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: 2,
                      bgcolor: "#e0e0e0",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        bgcolor: "#BF4342",
                        width:
                          rating === 5 ? "95%" : rating === 4 ? "5%" : "0%",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      minWidth: 25,
                      fontFamily: "Montserrat",
                      color: "#666",
                      fontSize: "0.9rem",
                    }}
                  >
                    {rating === 5 ? "34" : rating === 4 ? "02" : "00"}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#BF4342",
                color: "#BF4342",
                borderRadius: "20px",
                fontFamily: "Montserrat",
                textTransform: "none",
              }}
            >
              Write a Review
            </Button>
          </Stack>

          {/* Filter Options */}
          <Stack direction="row" alignItems="center">
            <Button
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                borderColor: "#ccc",
                color: "#666",
                borderRadius: "20px",
                fontFamily: "Montserrat",
                textTransform: "none",
                bgcolor: "transparent",
                fontSize: "0.875rem",
                px: 2,
                py: 0.5,
                "&:hover": {
                  borderColor: "#ccc",
                  bgcolor: "transparent",
                },
              }}
            >
              Rating
            </Button>

            <Typography sx={{ mx: 1, color: "#ccc" }}>|</Typography>

            <Button
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                borderColor: "#ccc",
                color: "#666",
                borderRadius: "20px",
                fontFamily: "Montserrat",
                textTransform: "none",
                bgcolor: "transparent",
                fontSize: "0.875rem",
                px: 2,
                py: 0.5,
                "&:hover": {
                  borderColor: "#ccc",
                  bgcolor: "transparent",
                },
              }}
            >
              Sort By - Time
            </Button>

            <Typography sx={{ mx: 1, color: "#ccc" }}>|</Typography>

            <Button
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                borderColor: "#ccc",
                color: "#666",
                borderRadius: "20px",
                fontFamily: "Montserrat",
                textTransform: "none",
                bgcolor: "transparent",
                fontSize: "0.875rem",
                px: 2,
                py: 0.5,
                "&:hover": {
                  borderColor: "#ccc",
                  bgcolor: "transparent",
                },
              }}
            >
              With media
            </Button>
          </Stack>
        </Box>

        {/* Review Item */}
        <ReviewItem review={review} />
        <Button
          sx={{
            color: "#A78A7F",
            textTransform: "none",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            fontFamily: "Montserrat",
            fontSize: "0.875rem",
            py: 0.5,
            px: 2,
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#F5E6D8",
              opacity: 0.8,
            },
          }}
        >
          ... SEE MORE
        </Button>
        {/* You may also like section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#BF4342",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            You may also like
          </Typography>

          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                <ProductCard
                  onClick={handleProductCardClick}
                  product={{
                    name: "Glasting Melting Balm #Original Series",
                    price: "13.99",
                    originalPrice: "19.99",
                    rating: "4.9",
                    image: productImages,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}

ProductDetail.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string),
    usage: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    price: PropTypes.number,
    featured: PropTypes.arrayOf(PropTypes.string),
    suggestedUse: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductDetail;
