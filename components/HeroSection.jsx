import React from 'react';
import { Box,Button,Container ,Stack, Typography} from '@mui/material';


const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/1ce3c7ff0c4455019944a0a0/pexels-photo-1916824.jpeg')",
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
          spacing={2}
        >
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, py: 22 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              Music Festival
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
              He's one of the world's most successful musicians, introduced Guy
              Ritchie to Madonna and has just been made a CBE. He has also
              written his memoirs - and doing it plunged him into depression.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Oswald",
                fontWeight: 700,
                letterSpacing: 1,
                pt: 3,
                width: "70%",
              }}
            >
              So why does everyone mock him?
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
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;
