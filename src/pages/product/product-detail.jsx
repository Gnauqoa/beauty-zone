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
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductImage1 from "../../assets/products/product-img.png";
import ProductThumbnail1 from "../../assets/products/item 1.png";
import ProductThumbnail2 from "../../assets/products/item 2.png";
import ProductThumbnail3 from "../../assets/products/item 3.png";
import StarIcon from "@mui/icons-material/Star";
import ProductCard from "../../components/Product/card-content";
import ProductDefault from "../../assets/products/default-product.png";
import ReviewItem from "../../components/Product/review-item";
import { useNavigate, useLocation } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const [images, setImages] = useState([
    ProductDefault,
    ProductThumbnail1,
    ProductThumbnail2,
    ProductThumbnail3,
  ]);

  const productImages = [ProductDefault, ProductImage1];

  const values = [
    {
      title: "Dewy&Glassy Lip Balm",
      description:
        "This melting balm glides on smoothly with a transparent and watery glow on your lips.",
    },
    {
      title: "A Watery Formula Without Greasiness",
      description:
        "Our plant-based moisturizing oil leaves lips feeling juicy and healthy, especially good for chapped lips during dry seasons.",
    },
    {
      title: "VEGAN Tinted Balm",
      description:
        "Our vegan formula with water-holding system for long-lasting hydration.",
    },
    {
      title: "Vibrant Colors Just For You",
      description:
        "Find your signature color with our range of vibrant color options. The romantichic, rom&nd.",
    },
  ];

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
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Xử lý previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Xử lý click vào thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleProductCardClick = () => {};

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
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

  return (
    <Box sx={{ pl: 4, bgcolor: "#f5e5d8" }}>
      <Stack>
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
            [NEW] Glasting Melting Balm Trio Set
          </Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Box sx={{ width: "30%" }}>
            <Box
              sx={{
                borderRadius: "30px",
                overflow: "hidden",
                mb: 2,
                position: "relative",
              }}
            >
              <Box
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .zoom-icon": {
                    opacity: 1,
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
                    opacity: showZoom ? 1 : 0,
                    visibility: showZoom ? "visible" : "hidden",
                    transition:
                      "all 0.1s ease-out, background-position 0.05s ease-out",
                    zIndex: 2,
                    transformOrigin: "center center",
                    willChange: "background-position, opacity, visibility",
                  }}
                />

                <Box
                  className="zoom-icon"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 1,
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      backgroundColor: "#000",
                    },
                    "&::before": {
                      width: "20px",
                      height: "2px",
                    },
                    "&::after": {
                      width: "2px",
                      height: "20px",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Thumbnail Navigation */}
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton onClick={handlePrevImage}>
                <ArrowBackIosIcon />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  overflow: "hidden",
                }}
              >
                {images.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    sx={{
                      width: 100,
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
                      src={images[index]}
                      alt={`Thumbnail ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <IconButton onClick={handleNextImage}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Right Side - Product Info */}
          <Box sx={{ width: "70%" }}>
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
              [NEW] Glasting Melting Balm Trio Set (05 Nougat Sand + 06 Kaya Fig
              + 07 Mauve Whip)
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#BF4342",
                  mb: 1,
                  fontFamily: "Montserrat",
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                }}
              >
                [Set Components]
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  ml: 2,
                }}
              >
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="05 Nougat Sand"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="06 Kaya Fig"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="07 Mauve Whip"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
              </List>
              <Stack direction="column" spacing={1}>
                {values.map((value, index) => (
                  <Typography
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
                      {value.title}
                    </Typography>
                    ] {value.description}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              $29.99 USD
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
            <ListItem
              sx={{
                display: "list-item",
                py: 0.5,
              }}
            >
              <ListItemText
                primary="Vegan"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                py: 0.5,
              }}
            >
              <ListItemText
                primary="A vibrant color balm that spreads vivid color as soon as it is applied"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                display: "list-item",
                py: 0.5,
              }}
            >
              <ListItemText
                primary="Water holding system forms a highly moisturizing protective film to block moisture from escaping with its elastic texture."
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
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
          <List sx={{}}>
            <ListItem sx={{}}>
              <ListItemText
                primary="Apply gently to the lips."
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{}}>
              <ListItemText
                primary="Use only a small amount, as it may break if you raise or lower a large amount."
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{}}>
              <ListItemText
                primary="Store in a place with little light exposure, as the color may change when exposed to strong light (sunlight, fluorescent light, store lighting, etc.) for a long time; avoid storage at high temperatures and below freezing."
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  },
                }}
              />
            </ListItem>
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
            Customer's Review
          </Typography>

          {/* Rating Summary */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 2 }}>
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
            <Typography
              sx={{
                color: "#666",
                fontFamily: "Montserrat",
              }}
            >
              Based on 36 reviews
            </Typography>
            {/* Rating Bars */}
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

export default ProductDetail;
