import {
  Box,
  Typography,
  Stack,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Logo from "../../assets/image 2.png";
import Logo2 from "../../assets/image 3.png";
import ProductImage1 from "../../assets/products/image.png";
import ProductImage2 from "../../assets/products/image 4.png";
import { useNavigate } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

function NewCollection() {
  const navigate = useNavigate();
  const sortOptions = [
    "Best Selling",
    "Price: Low to High",
    "Price: High to Low",
  ];
  const isMd = useResponsive("down", "md");
  const handleCollectionClick = (slug) => {
    navigate(`/new-collection/${slug}`);
  };

  const handleSortChange = () => {
    // Handle Sort Change
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5e5d8",
        px: 0,
        py: 4,
      }}
    >
      <Stack direction="row" justifyContent="left" alignItems="center">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "var(--primary-color)",
            fontFamily: "Montserrat",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => navigate(-1)}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          New Collections
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderTop: "1px solid #A78A7F",
          borderBottom: "1px solid #A78A7F",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            fontFamily: "Montserrat",
            ml: 2,
          }}
        >
          2 branchs
        </Typography>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControl
            variant="standard"
            sx={{ minWidth: 120, display: "flex", flexDirection: "row" }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: "medium",
                fontFamily: "Montserrat",
                mr: 1,
              }}
            >
              Sort By -
            </Typography>
            <Select
              variant="standard"
              defaultValue={sortOptions[0]}
              onChange={handleSortChange}
              sx={{
                fontSize: "1.25rem",
                fontWeight: "medium",
                color: "black",
                border: "none",
                "&:before": { borderBottom: "none" },
                "&:after": { borderBottom: "none" },
                "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
              }}
            >
              {sortOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 0,
          gap: 5,
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            width: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 3,
          }}
        >
          <img src={Logo} alt="new-collection" />
        </Box>
        <Stack
          direction={isMd ? "column" : "row"}
          justifyContent="left"
          alignItems="center"
          sx={{ width: "100%", px: 0, overflow: "hidden" }}
        >
          <Box
            position="relative"
            borderRadius="10px"
            overflow="hidden"
            width={isMd ? "100%" : "700px"}
            sx={{ px: 4 }}
          >
            <img
              src={ProductImage1}
              alt="new-collection"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Montserrat",
              fontSize: "1.25rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
                fontFamily: "Montserrat",
                marginLeft: "5rem",
                maxWidth: "400px",
              }}
            >
              Glasting Melting Balm #BALM TRIO
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Montserrat",
                  marginLeft: "5rem",
                  color: "#BF4342",
                }}
              >
                NEW SET DROP
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 4,
                  marginLeft: "6rem",
                }}
              >
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="05 Nougat Sand"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="06 Kaya Fig"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    py: 0,
                    display: "list-item",
                  }}
                >
                  <ListItemText
                    primary="07 Mauve Whip"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "1.15rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
              </List>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#BF4342",
                    maxWidth: "200px",
                    borderRadius: "20px",
                    border: "1px solid #000000",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: "#E7D7C1",
                  }}
                  onClick={() =>
                    handleCollectionClick("glasting-melting-balm-trio-set")
                  }
                >
                  Check out
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Box
          position="relative"
          borderRadius="10px"
          overflow="hidden"
          sx={{
            width: "200px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 3,
          }}
        >
          <img src={Logo2} alt="new-collection" />
        </Box>
        <Stack
          direction={isMd ? "column" : "row"}
          justifyContent={isMd ? "center" : "right"}
          alignItems="center"
          sx={{ width: "100%", px: 4 }}
        >
          {!isMd && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Montserrat",
                fontSize: "1.25rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Montserrat",
                  maxWidth: "350px",
                }}
              >
                Klairs Freshly Juiced Vitamin Drop
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    fontFamily: "Montserrat",
                    color: "#BF4342",
                  }}
                >
                  NEW DROP
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 1,
                  }}
                >
                  <ListItem
                    sx={{
                      py: 0,
                      display: "list-item",
                    }}
                  >
                    <ListItemText
                      primary="Serum / 35ml"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "1.15rem",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItem>
                </List>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    mr: 20,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BF4342",
                      maxWidth: "200px",
                      borderRadius: "20px",
                      border: "1px solid #000000",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      color: "#E7D7C1",
                    }}
                  >
                    Check out
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
          <Box
            position="relative"
            borderRadius="10px"
            overflow="hidden"
            width={isMd ? "100%" : "700px"}
            height="100%"
            sx={{ px: 4 }}
          >
            <img
              src={ProductImage2}
              alt="new-collection"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
          {isMd && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Montserrat",
                fontSize: "1.25rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Montserrat",
                  maxWidth: "350px",
                }}
              >
                Klairs Freshly Juiced Vitamin Drop
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "2rem",
                    fontFamily: "Montserrat",

                    color: "#BF4342",
                  }}
                >
                  NEW DROP
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    pl: 1,
                  }}
                >
                  <ListItem
                    sx={{
                      py: 0,
                      display: "list-item",
                    }}
                  >
                    <ListItemText
                      primary="Serum / 35ml"
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "1.15rem",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItem>
                </List>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    mr: 20,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#BF4342",
                      maxWidth: "200px",
                      borderRadius: "20px",
                      border: "1px solid #000000",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      fontFamily: "Montserrat",
                      color: "#E7D7C1",
                    }}
                  >
                    Check out
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default NewCollection;
