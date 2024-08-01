import { Box, Container, Stack, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import photo from "../public/img/photo.png";

const Section2 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fffaf3",
        width: "100%",
        height: { xs: "auto", md: "auto" },
        pt: { xs: 4, md: 0 },
        pb: { xs: 10, sm: 12 },
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              pt: { xs: 10, md: 20 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: { xs: "3rem", sm: "3rem", md: "4rem" },
              }}
            >
              Musical legend.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Courier New, monospace !important",
                fontWeight: 200,
                letterSpacing: 1,
                pt: 2,
                pr: { xs: 0, sm: 0, md: 10 },
                fontSize: "16px",
                textAlign: "justify",
              }}
            >
              Gordon Sumner, better known as Sting, was born in Newcastle upon
              Tyne, England, on October 2, 1951. He is best known for his
              singing career, both with the 1980s band The Police and as a solo
              artist. Sting is also a distinguished songwriter and actor, as
              well as an active philanthropist in causes from environmentalism
              to human rights.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 5,
                fontFamily: "Courier New, monospace !important",
              }}
            >
              Read More
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              mt: { xs: 4, sm: 4, md: 20 },
              height: { xs: "auto", sm: "auto", md: "auto" },
              bgcolor: "white",
              p: 4,
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row-reverse" },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Oswald",
                  fontWeight: 500,
                  letterSpacing: 1,
                  textAlign: "right",
                }}
              >
                Acting and Scoring in Films
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "sans-serif",
                  letterSpacing: 2,
                  pt: 2,
                  color: "GrayText",
                  fontSize: "14px",
                  textAlign: "right",
                }}
              >
                Along with his musical exploration and experimentation, Sting
                found time for acting. He appeared in several films, including
                the science-fiction drama Dune (1984) and the popular British
                crime film Lock, Stock, and Two Smoking Barrels (1998).
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  fontFamily: "Courier New, monospace !important",
                  float: "right",
                }}
              >
                Read More
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                left: { xs: 0, md: -90 },
                top: { xs: 10, sm: 10, md: 120 },
              }}
            >
              <Box sx={{ width: "313px", height: "313px" }}>
                <Image
                  src={photo}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section2;
