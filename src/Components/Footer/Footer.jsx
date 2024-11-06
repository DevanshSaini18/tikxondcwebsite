import React from 'react'
import { GlobeDemo } from './globe'
import { Typography, useMediaQuery } from '@mui/material';
import microsoftImage from "../../images/microsoft-for-startups.png"
import Box from '@mui/material/Box';
import ondcImage from "../../images/ondc-image.png"
import Grid from '@mui/material/Grid2';
import { IconMailFilled } from "@tabler/icons-react"

function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
            <div style={{
                backgroundColor: 'white',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Grid container spacing={2} width={'100%'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                    }}
                >
                    <Grid item xs={12} sm={6} >
                        <div style={{ width: isMobile ? '300px' : '600px', height: isMobile ? '300px' : '600px' }}>
                            <GlobeDemo />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{
                            // backgroundColor: 'red',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}>
                            <Box
                                component="img"
                                sx={{ width: 'auto', height: '100px' }}
                                alt="Microsoft logo"
                                src={microsoftImage}
                            />
                            <Box
                                component="img"
                                sx={{ width: 'auto', height: '100px' }}
                                alt="ONDC logo"
                                src={ondcImage}
                            />
                        </div>


                    </Grid>
                </Grid>
                <Box sx={{
                    mt: 'auto', // Push the footer to the bottom
                    background: 'linear-gradient(to bottom, black, #0f1e39)',
                    color: 'white',
                    width: '100%',
                    padding: '1rem 1rem 3rem 1rem', // Add some padding for better visibility
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between', // Add this line
                }}>
                    <Box textAlign={'center'}>
                        <Typography paddingBottom='1rem' textAlign={'left'}>
                            <span style={{ fontWeight: 'bold' }}>Contact </span><br /> 4th Floor, WeWork Zenia, Hiranandani Business Park, Thane West, Thane, Maharashtra - 400607
                        </Typography>
                    </Box>

                    <Box textAlign={'center'} >
                        <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
                            <IconMailFilled />
                            <Box component="span" sx={{ ml: 1 }}>
                                customer@qilo.in
                            </Box>
                        </Typography>
                    </Box>
                </Box>

            </div>

        </>
    )
}

export default Footer