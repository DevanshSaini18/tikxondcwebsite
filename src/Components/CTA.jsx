import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorChangeButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px', // Adjusted to make the button more rounded
  padding: '10px 20px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#0a0a0a', // Dark background to match the look
  color: 'white',
  fontSize: '16px',
  transition: 'color 0.3s ease',
  border: 'none', // Remove default border

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '20px',
    padding: '2px', // Thickness of the glowing border
    background: 'linear-gradient(135deg, #A07CFE, #FE8FB5, #FFBE7B, #A07CFE)',
    backgroundSize: '200% 200%',
    animation: 'glow 3s linear infinite',
    zIndex: -1,
    '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    '-webkit-mask-composite': 'destination-out',
    maskComposite: 'exclude',
  },

  '&:hover': {
    color: 'white',
  },

  '@keyframes glow': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

export default ColorChangeButton;
