import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, createTheme, ThemeProvider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';
import Divider from '@mui/material/Divider';

const FAQ = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const faqs = [
        {
            question: "How do I find products that align with my brand?",
            answer: "You can browse by category, audience interests, or brand values to find products that fit your niche."
        },
        {
            question: "How will I be compensated for promoting products?",
            answer: "Compensation is typically based on commission per sale, a flat fee, or pay-per-click."
        },
        {
            question: "How do I track the success of my promotions?",
            answer: "You’ll have access to a dashboard with metrics like clicks, conversions, and engagement to monitor each campaign’s performance."
        },
        {
            question: "Are there guidelines for creating promotional content?",
            answer: "Yes, each brand provides specific guidelines on messaging, tone, and visuals to ensure consistency and quality."
        },
        {
            question: "Is there support if I have issues with a campaign?",
            answer: "Yes, our support team is available to assist you with any questions or issues during your campaign."
        },
        {
            question: "Will I have access to product samples for my content?",
            answer: "Many brands offer free samples to influencers, so you can create authentic and engaging content."
        }
    ];

    return (

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                // backgroundColor: '#f0f0f0',
            }}
        >
            <Container >
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Frequently asked questions
                </Typography>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    {faqs.map((faq, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', md: '70%' },
                                marginBottom: '1rem',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.2s',
                                },
                            }}
                        >
                            <Accordion expanded={expanded === index} onChange={handleChange(index)} elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography
                                        sx={{
                                            color: expanded === index ? 'blue' : 'inherit',
                                            fontWeight: 'bold',
                                            fontFamily: 'monospace'
                                        }}
                                    >{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{fontWeight: 'bold',fontFamily: 'monospace',}}>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            {index < faqs.length - 1 && <Divider />}
                        </Box>
                    ))}
                </div>

            </Container>
        </Box>
    );
};

export default FAQ;
