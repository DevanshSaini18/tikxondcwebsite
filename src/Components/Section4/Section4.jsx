import { cn } from "../../lib/utils";
import { AnimatedList } from "../magicui/animated-list";
import React from "react";
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


let notifications = [
  {
    name: "Payment received",
    description: "Qilo Pay",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Hey liked your new",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Justin Boots wants partner",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

// Styled components
const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export function Section4({scrollToContactUs}) {
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
            <Box sx={{ height: {xs: "300px", md:"500px"}, overflow: 'hidden' }}>
              <AnimatedList>
                {notifications.map((item, idx) => (
                  <Notification {...item} key={idx} />
                ))}
              </AnimatedList>
            </Box>
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


        </Grid>
      </Container>
    </StyledBox>
    // <div
    //   // className={cn(
    //   //   "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
    //   //   className,
    //   // )}
    // >
    //   <AnimatedList>
    //     {notifications.map((item, idx) => (
    //       <Notification {...item} key={idx} />
    //     ))}
    //   </AnimatedList>
    // </div>
  );
}
