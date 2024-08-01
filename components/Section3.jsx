import React from 'react';
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/38194e74096456a2b964926c/abstract-music-rock-bw.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
      }}
    >
      <Container sx={{ color: "white" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={10}
          justifyContent="space-between"
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              //   height:"100%",
              background:
                "linear-gradient( rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5))",
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 80,
                bgcolor: "primary.main",
                float: "right",
                mr: 10,
                mt: 10,
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              py: 20,
              textAlign: "right",
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
              'The Last Ship' Broadway Musical
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Courier New, monospace !important",
                fontWeight: 200,
                letterSpacing: 1,
                pt: 2,
                pl: { xs: 0, sm: 0, md: 10 },
                // width: "65%",
                fontSize: "14px",
              }}
            >
              In 2013, Sting released the album The Last Ship, which drew
              inspiration from his childhood. He spent his early years not far
              from the shipyards of Wallsend, a Newcastle neighborhood. Singer
              and actor Jimmy Nail contributed vocals to the album and he also
              helped Sting develop a musical based on the album.
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
        </Stack>
      </Container>
    </Box>
  );
}

export default Section3;
