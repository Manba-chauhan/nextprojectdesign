import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#333333",p:4 ,color:"white"}}>
      <Typography varint="body1" sx={{textAlign:"center"}}> 
        Website Templates created with Website Builder Software.
      </Typography>
    </Box>
  );
}

export default Footer;
