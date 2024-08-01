import React from 'react';
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from 'next/image';
import photo2 from '../public/img/photo2.png'

const Section4 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fffaf3",
        width: "100%",
        height: "auto",
        pb:10,
      }}
    >
      <Container sx={{ color: "black" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
        >
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "40%" }, py: 20 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: { xs: "3rem", sm: "3rem", md: "4rem" },
              }}
            >
              Personal Life
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Courier New, monospace !important",
                fontWeight: 200,
                letterSpacing: 1,
                pt: 2,
                pr: { xs: 0, sm: 0, md: 10 },
                // width: "65%",
                fontSize: "16px",
              }}
            >
              In addition to his musical career, Sting has been active in human
              rights and other social issues. He and his wife, Trudie Styler,
              have been married since 1992. The couple has four children. Sting
              also has two other children from his first marriage.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 5,
                fontFamily: "Courier New, monospace !important",
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              // height:"100%",
            }}
          >
            <Box
              sx={{
                width: { xs: 300, sm: 400 },
                height: { xs: 280, sm: 380 },
                bgcolor: "white",

                // mr: 10,
                mt: { xs: -14, sm: -15, md: 10 },
              }}
            ></Box>
            <Box
              sx={{
                // width:"80%",
                mt: { xs: -20, sm: -40 },
                ml: { xs: 2, sm: 5 },
              }}
            >
              <Image
                src={photo2}
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Section4;
