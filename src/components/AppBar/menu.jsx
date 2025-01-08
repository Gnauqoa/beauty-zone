import {
  FavoriteBorderOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { MenuItem, Stack, Typography } from "@mui/material";
import { Menu as MuiMenu } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import SignInModal from "../../pages/auth/auth";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../../routers/path";

const Menu = () => {
  const { isLogin, login, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      {isLogin ? (
        <>
          <SearchOutlined sx={{ width: 40 }} />
          <FavoriteBorderOutlined sx={{ width: 40 }} />
          <ShoppingBagOutlined
            sx={{ width: 40, cursor: "pointer" }}
            onClick={handleCart}
          />
          <div onClick={handleClick}>
            <PersonOutline sx={{ width: 40 }} />
          </div>
          <SignInModal />

          <MuiMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </MuiMenu>
        </>
      ) : (
        <div onClick={login}>
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
        </div>
      )}
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
