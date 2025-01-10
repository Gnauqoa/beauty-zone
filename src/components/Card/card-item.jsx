import React from "react";
import { Box, Typography, IconButton, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CardItem = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderBottom: "1px solid #eee",
      }}
    >
      {/* Product Image */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      {/* Product Details */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price.toFixed(2)} USD
        </Typography>
      </Box>

      {/* Quantity Controls */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton size="small">
          <RemoveIcon />
        </IconButton>
        <Typography>{product.quantity}</Typography>
        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </Stack>

      {/* Total Price */}
      <Typography variant="h6" sx={{ minWidth: 100, textAlign: "right" }}>
        ${(product.price * product.quantity).toFixed(2)}
      </Typography>

      {/* Delete Button */}
      <IconButton color="error">
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
  );
};

export default CardItem;
