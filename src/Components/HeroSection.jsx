import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Button, colors } from '@mui/material';
// import strokeImage from "../images/yellow-single-stroke-removebg-preview.png"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import longHorizontalImage from "../images/creator1.jpeg"
import longHorizontalImage2 from "../images/creator5.jpeg"
import smallSquareImage from "../images/creator7.jpg"
import creator8 from "../images/creator8.png"
import creator9 from "../images/creator9.jpg"
import creator10 from "../images/creator10.jpg"
import { GradualSpacing } from "./magicui/gradual-spacing";
import { WordFadeIn } from "./magicui/word-fade-in";
import { FadeText } from './magicui/fade-text';
import { motion } from 'framer-motion';
import ColorChangeButton from './CTA';
import { Navbar } from "./NavBar/NavBar"
import { useMediaQuery } from '@mui/material';
import "../global.css"


function HeroSection({ scrollToHome, scrollToContactUs, scrollToAbout, scrollToFeatures, scrollToFAQ }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div style={{ position: 'relative', height: '100%', background: 'linear-gradient(to bottom, black, #1e3c72)' }}>
            <motion.div
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, top: '0px' }}
                animate={{ opacity: 1, top: '25px' }}
                transition={{ duration: 0.4, delay: 0 }}
            >
                <Navbar scrollToHome={scrollToHome} scrollToContactUs={scrollToContactUs} scrollToAbout={scrollToAbout} scrollToFeatures={scrollToFeatures} scrollToFAQ={scrollToFAQ} />
            </motion.div>

            <Grid container style={{ height: '99%', position: 'relative' }}>

                <Grid size={{ xs: 12, md: 7 }} order={isMobile ? 2 : 1} sx={{ height: { xs: "50%", md: '100%' }, padding: { xs: '0% 2% 10% 10%', md: '5% 0% 5% 7%' } }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            display: 'flex', // Set the display property to flex
                            justifyContent: 'center', // Center align the children horizontally
                            alignItems: 'center', // Center align the children vertically
                            // backgroundColor: 'white',
                        }}
                    >
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>

                            <motion.div initial={{ opacity: 0, filter: 'blur(0px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, delay: 1 }} style={{ height: '34%', width: '39%', margin: '0% 0.5% 1% 0.5%', backgroundPosition: 'center 20%', borderRadius: '10px', backgroundImage: `url(${creator10})`, backgroundSize: '100% auto', position: 'absolute', top: '0%', left: '20%' }} />


                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(0px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, delay: 1.5 }}
                                style={{
                                    height: '35%',
                                    width: '40%',
                                    borderRadius: '10px',
                                    // backgroundColor: 'blue',
                                    backgroundImage: `url(${creator9})`,
                                    backgroundSize: '100% auto',
                                    backgroundPosition: 'center 30%',
                                    position: 'absolute',
                                    top: '35%',
                                    left: '20%',
                                }}
                            />

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(0px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, delay: 0.5 }}
                                style={{
                                    height: '70%',
                                    width: '29%',
                                    borderRadius: '10px',
                                    // backgroundColor: 'yellow',
                                    backgroundImage: `url(${longHorizontalImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'absolute',
                                    top: '0%',
                                    left: '-10%',
                                    margin: '0% 1% 0% 0%'
                                }}
                            />
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(0px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, delay: 2 }}
                                style={{ height: '29%', width: '70%', margin: '1% 0% 0% 0%', borderRadius: '10px', backgroundImage: `url(${creator8})`, backgroundSize: '100% auto', position: 'absolute', top: '70%', left: '-10%' }} />
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(0px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 0.2, delay: 2.5 }}
                                style={{
                                    height: '100%', width: '39%', margin: '0% 0% 0% 1%', borderRadius: '10px',
                                    backgroundImage: `url(${longHorizontalImage2})`, backgroundSize: 'auto 100%', position: 'absolute', top: '0%', left: '60%'
                                }} />

                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} order={isMobile ? 1 : 2} height={{ xs: '50%', md: '100%' }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'red',
                    }}>
                    <Box
                        sx={{
                            // height: { sm: '100%', xs: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // padding: '0.5rem',
                            // backgroundColor: 'orange'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(0px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.2, delay: isMobile ? 0 : 3 }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontFamily: 'Comic Neue',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '4rem', lg: '4rem', md: '4rem' },
                                }}
                            >
                                Fashion Redefined
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(0px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, delay: isMobile ? 0 : 3 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <Typography className="text-white text-center mb-4" fontFamily={'Comic Neue'}>
                                Monetize your style, creativity and influence.
                            </Typography>

                            <Box
                                className="flex items-center justify-center bg-cover bg-center px-8"
                                style={{
                                    // backgroundImage: `url(${strokeImage})`,
                                    width: { xs: '4rem', md: '200px', color: 'white' },
                                }}
                            >
                                <Typography className="text-white text-center" fontFamily={'Comic Neue'}>
                                    Be bold, be you!
                                </Typography>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(0px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.3, delay: isMobile ? 0 : 3 }}
                        >
                            <Box paddingTop={'10px'} sx={{ fontFamily: 'transparent' }}>
                                <button onClick={() => scrollToContactUs()} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" style={{ fontFamily: 'transparent' }}>
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" style={{ fontFamily: 'transparent' }} />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl bg-transparent" style={{ fontFamily: 'Comic Neue', backgroundColor: 'black' }}>
                                        Join the Fun
                                    </span>
                                </button>
                            </Box>
                        </motion.div>




                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default HeroSection