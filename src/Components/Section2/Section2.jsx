import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import creator_illus from "../../images/creator_illustration1.png";
import Button from '@mui/material/Button';
import pdtDemo1 from "../../images/pdt_demo_image1_enhanced.png";
import pdtDemo2 from "../../images/photo-img-demo-2_enhanced.png";
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@mui/system';
// import { styled } from '@mui/system';
import { useMediaQuery } from '@mui/material';


const CarouselImage = styled(motion.img)({
  width: 'auto',
  height: '100%',
  position: 'absolute',
});

const images = [
  pdtDemo1,
  pdtDemo2
];

// Styled components
const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto'
});

const Section2 = ({scrollToContactUs}) => {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <StyledBox>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.7rem', md: '3rem' },
                fontWeight: 'bold',
                mb: 1,
                // backgroundColor: 'yellow',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Unleash Influence Monetize Content
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
              Turn your social media presence into a money-making machine. Now you can fully monetize your content and  <span style={{ fontWeight: 'bold', color: 'black' }}> earn royalty <span style={{ fontSize: '1.5rem' }}>🎉</span></span> for endorsements.
              Your followers adore your style—now let them shop it, while you make money!
            </Typography>
            <Button variant="contained" onClick={() => scrollToContactUs()}
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '0.5rem 1rem 0.5rem 1rem',
                textTransform: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
              }}>
              Start Now
            </Button>

          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6} overflow={'hidden'} height={'550px'}>
            <Box
              sx={{
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '300px' : '500px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence initial={false}>
                <CarouselImage
                  key={index}
                  src={images[index]}
                  alt="carousel"
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </Box>

          </Grid>


        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Section2;