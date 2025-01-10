import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ReviewItem = ({ review }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          component="img"
          src={review.userAvatar}
          alt="user avatar"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: "#666",
                fontFamily: "Montserrat",
                fontSize: "0.9rem",
              }}
            >
              {review.username}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Typography>{review.rating}</Typography>
              <StarIcon sx={{ color: "#BF4342", fontSize: "1rem" }} />
            </Stack>
          </Stack>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
              my: 1,
            }}
          >
            {review.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#333",
              mb: 1,
            }}
          >
            {review.content}{" "}
            <Typography
              component="span"
              sx={{
                color: "#666",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              See more
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReviewItem;
