import {
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useResponsive from "../../hooks/useResponsive";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ListTab = [
  {
    label: "SALE",
    href: "/sale",
  },
  {
    label: "NEW COLLECTION",
    href: "/new-collection",
  },
  {
    label: "NEW",
    href: "/new",
  },
  {
    label: "BEST SELLERS",
    href: "/best-sellers",
  },
  {
    label: "MAKEUP",
    href: "/makeup",
  },
  {
    label: "SKINCARE",
    href: "/skincare",
  },
  { label: "SKINCARE", href: "/skincare" },

  {
    label: "VIRTUAL SERVICES",
    href: "/virtual-services",
  },
  {
    label: "DISCOVER",
    href: "/discover",
  },
];

const SubBar = () => {
  const isMd = useResponsive("down", "md");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isMd) {
    return (
      <Stack
        sx={{
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          position: "absolute",
          top: "120px",
          zIndex: 20,
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            px: 0.5,
            py: "0.2px",
            borderRadius: "4px",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            bgcolor: "#8C1C13",
            mx: "auto",
          }}
        >
          <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {ListTab.map((tab, index) => (
            <MenuItem
              onClick={() => {
                navigate(tab.href);
                handleClose();
              }}
              key={index}
            >
              {tab.label}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    );
  }
  return (
    <Stack
      sx={{
        py: 1,
        bgcolor: "secondary.main",
      }}
    >
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
            bgcolor: "secondary.main",
          }}
        >
          {ListTab.map((tab, index) => (
            <TabButton key={index} label={tab.label} href={tab.href} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

const TabButton = ({ label, href }) => {
  return (
    <Link to={href}>
      <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{label}</Typography>
    </Link>
  );
};
TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default SubBar;
