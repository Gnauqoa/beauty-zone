import {
  FavoriteBorderOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import SignInModal from "../../pages/auth/auth";

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
      <SignInModal />
    </Stack>
  );
};

export default Menu;
