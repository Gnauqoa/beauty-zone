import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Button,
  Modal,
  Divider,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignInModal = () => {
  const [open, setOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsSignIn(true);
  };

  const toggleMode = () => setIsSignIn((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Thêm tài khoản test
  const MOCK_USER = {
    email: "thien@gmail.com",
    password: "123456",
    name: "Test User",
    id: 1,
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields");
        return;
      }

      // Giả lập API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Kiểm tra credentials
      if (
        formData.email === MOCK_USER.email &&
        formData.password === MOCK_USER.password
      ) {
        // Tạo mock token
        const mockToken = "mock-jwt-" + Date.now();

        const userData = {
          id: MOCK_USER.id,
          email: MOCK_USER.email,
          name: MOCK_USER.name,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", mockToken);

        // Cập nhật state currentUser
        setCurrentUser(userData);

        handleClose();
        setFormData({ email: "", password: "" });
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderSignUpForm = () => (
    <>
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: "bold",
          my: 4,
        }}
      >
        Sign Up
      </Typography>

      <Box
        sx={{
          bgcolor: "rgba(140,28,19,0.2)",
          padding: 2,
          width: "592px",
          borderRadius: "35px",
          boxShadow: "inset 0px 0px 3px 0px rgba(0,0,0,0.1)",
        }}
      >
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />
        <TextField
          fullWidth
          label="Email/Phone Number"
          variant="outlined"
          margin="normal"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />
        <Stack direction="row" spacing={2} mt={1}>
          <TextField
            fullWidth
            label="Gender"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Birthday"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />
        </Stack>

        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide password" : "show password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        >
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showConfirmPassword ? "hide password" : "show password"
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <Typography
          variant="body2"
          mt={1}
          sx={{
            fontFamily: "Montserrat",
            maxWidth: "365px",
            fontSize: "0.75em",
            color: "#000000de",
          }}
        >
          By signing up, you agree to our{" "}
          <Link
            component="span"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#8C1C13",
              cursor: "pointer",
            }}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            component="span"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "#8C1C13",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </Link>
          .
        </Typography>
      </Box>
    </>
  );

  return (
    <Box>
      <Typography
        onClick={currentUser ? null : handleOpen}
        sx={{
          fontSize: 18,
          cursor: currentUser ? "default" : "pointer",
          fontFamily: "Montserrat",
          color: "#000",
        }}
      >
        {currentUser ? `Hello, ${currentUser.name}` : "SIGN IN"}
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="auth-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "675px",
            padding: 3,
            bgcolor: "#E7D7C1",
            borderRadius: 3,
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              left: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          {isSignIn ? (
            <>
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontWeight: "bold",
                  my: 5,
                }}
              >
                Welcome back!
              </Typography>
              <Box
                component="form"
                onSubmit={handleSignIn}
                sx={{
                  bgcolor: "rgba(140,28,19,0.2)",
                  padding: 2,
                  width: "592px",
                  borderRadius: "35px",
                  boxShadow: "inset 0px 0px 3px 0px rgba(0,0,0,0.1)",
                }}
              >
                {error && (
                  <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                    {error}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Email/Phone Number"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <Typography
                        fontSize="0.75em"
                        fontFamily="Montserrat"
                        fontWeight="semibold"
                      >
                        Remember Me
                      </Typography>
                    }
                  />
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ fontSize: "0.75em", color: "#000000de" }}
                  >
                    Forgot Password?
                  </Link>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    mt: 2,
                    bgcolor: "#8C1C13",
                    borderRadius: "10px",
                    "&:hover": {
                      bgcolor: "#6b150f",
                    },
                  }}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </Box>
            </>
          ) : (
            renderSignUpForm()
          )}

          <Typography align="center" variant="body2" mt={5}>
            or {isSignIn ? "Sign In" : "Sign Up"} using
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <IconButton>
              <GoogleIcon sx={{ color: "#dd4b39" }} />
            </IconButton>
            <IconButton>
              <FacebookIcon sx={{ color: "#3b5998" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "#00aced" }} />
            </IconButton>
          </Stack>

          <Divider sx={{ mt: 2 }} />

          <Typography align="center" variant="body2" mt={2}>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <Link
              onClick={toggleMode}
              variant="body2"
              ml={0.5}
              sx={{
                color: "#8C1C13",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default SignInModal;
