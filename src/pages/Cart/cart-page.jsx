import React from "react";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import CardItem from "../../components/Card/card-item";

const Cart = () => {
  // Mock data - thay thế bằng dữ liệu thực tế sau
  const cartItems = [
    {
      id: 1,
      name: "Glasting Melting Balm Trio Set",
      price: 29.99,
      quantity: 1,
      image: "/path-to-image.jpg",
    },
    // Thêm các sản phẩm khác
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" textAlign="center" sx={{ my: 4 }}>
          Your cart is empty
        </Typography>
      ) : (
        <Box>
          {/* Cart Items */}
          <Box sx={{ mb: 4 }}>
            {cartItems.map((item) => (
              <CardItem key={item.id} product={item} />
            ))}
          </Box>

          {/* Order Summary */}
          <Box
            sx={{
              maxWidth: 400,
              ml: "auto",
              p: 3,
              bgcolor: "#f5f5f5",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Order Summary
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Subtotal</Typography>
              <Typography>${calculateTotal().toFixed(2)}</Typography>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">
                ${calculateTotal().toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#8C1C13",
                "&:hover": {
                  bgcolor: "#6b150f",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
