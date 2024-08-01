import { Box, Container, Stack,Typography,Button } from '@mui/material';
import photo from '../public/img/photo.png'
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const Section5 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fffaf3",
        width: "100%",
        height: "auto",
        pb: 10,
        pt: 10,
        color: "black",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              mt: { xs: 4, sm: 4, md: 20 },
              height: { xs: "auto", sm: "auto", md: "auto" },
              bgcolor: "white",
              p: 4,
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Oswald",
                  fontWeight: 500,
                  letterSpacing: 1,
                  // textAlign: "right",
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
                  // textAlign: "right",
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
                  //   float: "right",
                }}
              >
                Read More
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                left: { xs: 0, md: 90 },
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
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
            }}
          >
            <Box sx={{ pl: { xs: 0, sm: 0, md: 10 } }}>
              {" "}
              <FontAwesomeIcon icon={faQuoteLeft} style={{ height: 150 }} />
            </Box>
            <Box sx={{ pl: { xs: 0, sm: 0, md: 10 } }}>
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
                Learn to enjoy every minute of your life. Be happy now. Don't
                wait for something outside of yourself to make you happy in the
                future. Think how really precious is the time you have to spend,
                whether it's at work or with your family. Every minute should be
                enjoyed and savored.
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
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Section5;
