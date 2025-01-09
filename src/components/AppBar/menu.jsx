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
          <ShoppingBagOutlined sx={{ width: 40 }} />
          <div onClick={handleClick}>
            <PersonOutline sx={{ width: 40 }} />
          </div>
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
    </Stack>
  );
};

export default Menu;
