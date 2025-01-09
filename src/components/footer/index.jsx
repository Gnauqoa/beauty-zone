import { Container, Stack, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

const Footer = () => {
  const isMd = useResponsive("down", "md");
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.main",
        py: 3,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: isMd ? "column" : "row",
          gap: isMd ? 3 : 0,
          justifyContent: isMd ? "center" : "space-between",
        }}
      >
        <Logo />
        <Services />
        <About />
      </Container>
    </Stack>
  );
};

const About = () => (
  <Stack
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      height: "100%",
    }}
  >
    <Typography sx={{ fontSize: 24, fontWeight: 600 }}>About</Typography>
    <Typography sx={{ fontSize: 22, fontWeight: 300 }}>
      Since 2024 <br></br>
      About the Brands<br></br>
      12TSE215 Foundation<br></br>
      Student Discounts<br></br>
      Career
    </Typography>
  </Stack>
);

const Services = () => (
  <Stack
    sx={{ display: "flex", flexDirection: "column", gap: 1, height: "100%" }}
  >
    <Typography sx={{ fontSize: 24, fontWeight: 600, mb: "auto" }}>
      CUSTOMER SERVICE
    </Typography>
    <Typography sx={{ fontSize: 22, fontWeight: 300 }}>
      customerservice@beautyzone.com <br></br> 1-215-215-2024 <br></br> Order
      Status <br></br>
      Shipping Information <br></br> Help & FAQs <br></br> Gift Card Balance
    </Typography>
  </Stack>
);

const Logo = () => (
  <Stack
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
    }}
  >
    <img className="h-[120px]" src={"/icon/logo-text.svg"} />
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <img className="h-[24px] w-[24px]" src={"/icon/location.svg"} />
      <Typography sx={{ fontSize: 12 }}>
        Linh Trung District, Thu Duc, HCM City, Viet Nam{" "}
      </Typography>
    </Stack>
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <img className="h-[30px] w-[30px]" src={"/icon/gm.svg"} />
      <img className="h-[30px] w-[30px]" src={"/icon/fb.svg"} />
      <img className="h-[30px] w-[30px]" src={"/icon/yt.svg"} />
    </Stack>
  </Stack>
);

export default Footer;
