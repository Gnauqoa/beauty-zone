import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const MenuBar = () => {
  const menuItems = [
    { name: "SALE", path: "/sale" },
    { name: "NEW COLLECTION", path: "/new-collection" },
    { name: "NEW", path: "/new" },
    { name: "BEST SELLERS", path: "/best-sellers" },
    { name: "MAKEUP", path: "/makeup" },
    { name: "SKINCARE", path: "/skincare" },
    { name: "VIRTUAL SERVICE", path: "/virtual-service" },
    { name: "DISCOVER", path: "/discover" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#A78A7F", // Background color matching the image
        paddingY: 1, // Padding on top and bottom
      }}
    >
      {menuItems.map((item) => (
        <RouterLink
          to={item.path}
          key={item.name}
          style={{
            textDecoration: "none",
            color: "#000",
            margin: "0 8px",
            fontSize: "20px",
            fontWeight: "800",
            fontFamily: "Montserrat",
            textTransform: "uppercase",
          }}
        >
          {item.name}
        </RouterLink>
      ))}
    </Box>
  );
};

export default MenuBar;
