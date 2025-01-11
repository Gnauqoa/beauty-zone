import { Stack, Typography } from "@mui/material";
import { productData } from "../../../utils/product-data";
import ProductCard from "../../../components/Product/card-content";

const Step3 = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 3,
        height: "100%",
        gap: 3,
      }}
    >
      <Typography sx={{ fontSize: 24, fontWeight: 300 }}>
        Your personal color is{" "}
        <i>
          <span className="text-[#8C1C13] font-[500]">Light Spring </span>
        </i>
      </Typography>
      <Typography sx={{ fontSize: 20, fontWeight: 100 }}>
        Here is some recommends for you
      </Typography>

      {productData.slice(0, 3).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Stack>
  );
};

export default Step3;
