import { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = () => {
    localStorage.setItem("previousPath", location.pathname);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product-detail/${product.slug}`);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleIconClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Box
      onClick={() => handleCardClick()}
      sx={{
        padding: 1.5,
        backgroundColor: "transparent",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.2s ease",

        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "30px",
          overflow: "visible",

          backgroundColor: "var(--primary-color)",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            borderBottom: "40px solid var(--primary-color)",
            overflow: "hidden",

            position: "relative",
            "&:hover .hover-image": {
              opacity: 1,
              visibility: "visible",
            },
          }}
        >
          <img
            src={product.image[0]}
            alt={product.name}
            style={{
              width: "100%",
              minHeight: "",
              display: "block",
            }}
          />

          <Box
            component="img"
            src={product.image[1]}
            alt={product.name}
            className="hover-image"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              minHeight: "294px",
              objectFit: "cover",
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.3s ease",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            zIndex: 1,
            width: "100px",
          }}
        >
          <IconButton
            size="small"
            onClick={handleIconClick}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <FavoriteBorderIcon sx={{ color: "black", fontSize: "1.25rem" }} />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleIconClick}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <ShoppingCartOutlinedIcon
              sx={{ color: "black", fontSize: "1.25rem" }}
            />
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
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
