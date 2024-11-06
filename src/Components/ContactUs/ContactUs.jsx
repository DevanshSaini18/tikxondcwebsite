import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';
import { IconSend } from "@tabler/icons-react"

const CustomButton = styled(Button)({
  backgroundColor: 'green',
  color: 'white',
  padding: '0.5rem 1rem',
  textTransform: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '&:active': {
    transform: 'scale(0.9)',
  },
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_question: '',
    from_phone: '',
    from_email: '',
  });
  const isMobile = useMediaQuery('(max-width:600px)');


  const [displayEmpty, setDisplayEmpty] = useState(false)
  const [displaySent, setDisplaySent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.from_phone === '' && formData.from_email === '') {
      setDisplaySent(false)
      setDisplayEmpty(true)
      return
    }

    // Replace these values with your own EmailJS service ID, template ID, and user ID
    const serviceID = 'service_51yl1wk';
    const templateID = 'template_f5fvvlq';
    const userID = 'QbUBntGt01osLG2Cu';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log(result.text);
        // You can show a success message to the user here
        setDisplayEmpty(false)
        setDisplaySent(true)
      })
      .catch((error) => {
        console.error(error.text);
        // You can show an error message to the user here
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Adjust the height as needed
      bgcolor='#fffdd0'
      padding='10px'
    >
      <Box textAlign='left'>
        <Typography fontSize={{ xs: '2rem', md: '2rem' }}>
          /Get In Touch

        </Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Typography fontSize={{ xs: '1.2rem', md: '3rem' }}>Hi, I am </Typography>
              </div>
              <div style={{ marginLeft: '10px', width: { xs: '25px', md: '400px' } }}>
                <TextField
                  label="Name"
                  variant="standard"
                  onChange={handleChange}
                  name="from_name"
                  sx={{
                    width: { xs: '150px', md: '400px' },
                    "& .MuiInput-root": {
                      color: "blue",
                      fontFamily: "Arial",
                      fontSize: { xs: '1.2rem', md: '2rem' },
                      // backgroundColor: '#ffffff',
                      "&:before": {
                        borderColor: "#2e2e2e",
                        borderWidth: "0px",
                      },
                      "&:after": {
                        borderColor: "blue",
                        borderWidth: "2px",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderColor: "blue",
                      },
                      "&.Mui-focused": {
                        backgroundColor: "transparent", // Change this to the color you want
                      },
                    },
                    "& .MuiInputLabel-standard": {
                      color: "blue",
                      fontSize: { xs: '1rem', md: '2rem' },
                      // paddingBottom: '20px',
                      // paddingLeft: '20px',
                    },
                    "& .MuiInputLabel-shrink": {
                      fontSize: '0rem',
                    },
                  }}
                />

                <Divider sx={{ borderBottomWidth: 5 }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Typography fontSize={{ xs: '1.2rem', md: '3rem' }}>I want to ask </Typography>
              </div>
              <div style={{ marginLeft: '10px', width: { xs: '25px', md: '400px' } }}>
                <TextField
                  label="Question"
                  variant="standard"
                  onChange={handleChange}
                  name="from_question"
                  sx={{
                    width: { xs: '150px', md: '400px' },
                    "& .MuiInput-root": {
                      color: "orange",
                      fontFamily: "Arial",
                      fontSize: { xs: '1.2rem', md: '2rem' },
                      "&:before": {
                        borderColor: "#2e2e2e",
                        borderWidth: "0px",
                      },
                      "&:after": {
                        borderColor: "orange",
                        borderWidth: "2px",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderColor: "orange",
                      },
                    },
                    "& .MuiInputLabel-standard": {
                      color: "orange",
                      fontSize: { xs: '1rem', md: '2rem' },
                      paddingBottom: '0px',
                      paddingLeft: '0px',
                    },
                    "& .MuiInputLabel-shrink": {
                      fontSize: '0rem',
                    },
                    // InputProps={background: "rgb(232, 241, 250)"}
                  }}
                />
                {/* <input
                  type="text"
                  name="from_question"
                  value={formData.from_question}
                  onChange={handleChange}
                  style={{
                    backgroundColor: 'transparent',
                    width: isMobile ? '200px' : '400px',
                    color: 'orange',
                    border: 'none',
                    borderRadius: 0, // Remove border radius
                    '&:focus': {
                      border: 'none', // Remove border radius when focused
                      borderWidth: '0px',
                    }
                  }}
                /> */}
                {/* <input
                  type="text"
                  name='from_question'
                  value={formData.from_question}
                  onChange={handleChange}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    color: 'orange',
                    width: isMobile ? '200px' : '400px',
                    fontSize: isMobile ? '1rem' : '2rem',
                    '::placeholder': {
                      color: 'orange',
                    },
                  }}
                  placeholder=""
                /> */}







                <Divider sx={{ borderBottomWidth: 5 }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Typography fontSize={{ xs: '1.2rem', md: '3rem' }}>You can reach me at my </Typography>
              </div>
              <div style={{ marginLeft: '10px', width: { xs: '25px', md: '400px' } }}>
                <TextField
                  label="Phone"
                  variant="standard"
                  onChange={handleChange}
                  name="from_phone"
                  sx={{
                    width: { xs: '100px', md: '400px' },
                    "& .MuiInput-root": {
                      color: "brown",
                      fontFamily: "Arial",
                      fontSize: { xs: '1.2rem', md: '2rem' },
                      "&:before": {
                        borderColor: "#2e2e2e",
                        borderWidth: "0px",
                      },
                      "&:after": {
                        borderColor: "brown",
                        borderWidth: "2px",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderColor: "brown",
                      },
                    },
                    "& .MuiInputLabel-standard": {
                      color: "brown",
                      fontSize: { xs: '1rem', md: '2rem' },
                      // paddingBottom: '20px',
                      // paddingLeft: '20px',
                    },
                    "& .MuiInputLabel-shrink": {
                      fontSize: '0rem',
                    },
                  }}
                />


                <Divider sx={{ borderBottomWidth: 5 }} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Typography fontSize={{ xs: '1.2rem', md: '3rem' }}>or at my </Typography>
              </div>
              <div style={{ marginLeft: '10px', width: { xs: '25px', md: '400px' } }}>
                <TextField
                  label="Email"
                  variant="standard"
                  onChange={handleChange}
                  name="from_email"
                  sx={{
                    width: { xs: '150px', md: '400px' },
                    "& .MuiInput-root": {
                      color: "purple",
                      fontFamily: "Arial",
                      fontSize: { xs: '1.2rem', md: '2rem' },
                      "&:before": {
                        borderColor: "#2e2e2e",
                        borderWidth: "0px",
                      },
                      "&:after": {
                        borderColor: "purple",
                        borderWidth: "2px",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderColor: "purple",
                      },
                    },
                    "& .MuiInputLabel-standard": {
                      color: "purple",
                      fontSize: { xs: '1rem', md: '2rem' },
                      paddingBottom: '0px',
                      paddingLeft: '0px',
                    },
                    "& .MuiInputLabel-shrink": {
                      fontSize: '0rem',
                    },
                  }}
                />


                <Divider sx={{ borderBottomWidth: 5 }} />
              </div>
            </div>
            {/* <Button sx={{ fontSize: '1rem' }} variant='contained'>Send</Button> */}
          </Box>
          {/* <Button type="submit" sx={{ fontSize: '1rem' }} variant='contained'>Send</Button> */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            {/* <CustomButton type="submit" variant="contained"><IconSend /></CustomButton> */}
            {displayEmpty && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                🚨 Oops! Both Phone and Email are empty. Please provide at least one so we can reach you! 📞📧            </p>
            )}
            {displaySent && (
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                🎉 Success! Your message has been sent. Our team will be in touch soon! 😃📬
              </p>
            )}
            {!displayEmpty && !displaySent && (<p></p>)}
            <div style={{height: '100%'}}>
              <CustomButton type="submit" variant="contained"><IconSend /></CustomButton>
            </div>
          </Box>



        </form>

      </Box>

    </Box>
  );
};

export default ContactUs;
