import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
