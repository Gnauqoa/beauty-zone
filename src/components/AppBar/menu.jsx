import {
  FavoriteBorderOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Stack
      sx={{
        ml: "auto",
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
      }}
    >
      <SearchOutlined sx={{ width: 40 }} />
      <FavoriteBorderOutlined sx={{ width: 40 }} />
      <ShoppingBagOutlined sx={{ width: 40 }} />
      <PersonOutline sx={{ width: 40 }} />
      <Typography
        sx={{
          fontSize: 18,
          cursor: "pointer",
          fontFamily: "Montserrat",
          color: "#000",
        }}
      >
        SIGN IN
      </Typography>
    </Stack>
  );
};

export default Menu;
