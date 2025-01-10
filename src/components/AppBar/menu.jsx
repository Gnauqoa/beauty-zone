import {
  FavoriteBorderOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import SignInModal from "../../pages/auth/auth";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../../routers/path";

const Menu = () => {
  const navigate = useNavigate();
  const handleCart = () => {
    console.log(PATH_PAGE.outlet.cart);
    navigate(PATH_PAGE.outlet.cart);
  };
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
      <ShoppingBagOutlined
        sx={{ width: 40, cursor: "pointer" }}
        onClick={handleCart}
      />
      <PersonOutline sx={{ width: 40 }} />
      <SignInModal />
    </Stack>
  );
};

export default Menu;
