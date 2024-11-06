import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import creator_illus from "../../images/creator_illustration2.webp";
import Button from '@mui/material/Button';

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

const Section2 = () => {
    return (
        <StyledBox>
            <Container>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    direction={{ xs: 'column', md: 'row' }}
                >
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <StyledImage
                            src={creator_illus}
                            alt="Creator illustration"
                        />
                    </Grid>
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
                            Elevate, Connect, Grow!
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                        Join, connect your Insta or YouTube, and share products. Perfect for fashion influencers ✨, our platform offers tools, insights, and community support. Elevate your audience’s shopping experience 🚀
                        </Typography>
                        <Button variant="contained"
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


                </Grid>
            </Container>
        </StyledBox>
    );
};

export default Section2;