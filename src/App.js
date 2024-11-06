import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HeroSection from './Components/HeroSection';
import CustomCursor from './Components/CustomCursor/CustomCursor';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import { Section4 } from './Components/Section4/Section4';
import FAQ from './Components/FAQ/FAQ';
import ContactUs from "./Components/ContactUs/ContactUs"
// import { Navbar } from "./Components/NavBar/NavBar0"
import { Navbar } from "./Components/NavBar/NavBar"
import {useMediaQuery } from '@mui/material';
import Footer from './Components/Footer/Footer';

const SnapScrollContainer = styled('div')`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE, Edge, and older browsers */
  -ms-overflow-style: none;
`;

const SnapScrollSection = styled('div')`
  scroll-snap-align: start;
  height: 100vh;
`;

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const index = Math.floor(scrollTop / sectionHeight);
      console.log(scrollTop, sectionHeight)
      setActiveSection(index);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHome = (e) => {
    // console.log('haha')
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToAbout = (e) => {
    // console.log('haha')
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToFeatures = (e) => {
    // console.log('haha')
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContactUs = (e) => {
    // console.log('haha')
    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToFAQ = (e) => {
    // console.log('haha')
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ cursor: 'none', height: '100vh', width: '100%' }}>
      {!isMobile && <CustomCursor />}
      <SnapScrollContainer ref={containerRef}>
        <SnapScrollSection id='home'>
          <HeroSection scrollToHome={scrollToHome} scrollToContactUs={scrollToContactUs} scrollToAbout={scrollToAbout} scrollToFeatures={scrollToFeatures} scrollToFAQ={scrollToFAQ}/>
        </SnapScrollSection>
        <SnapScrollSection id='about'>
          <Section2 scrollToContactUs={scrollToContactUs}/>
        </SnapScrollSection>
        <SnapScrollSection id='features'>
          <Section4 scrollToContactUs={scrollToContactUs}/>
        </SnapScrollSection>
        <SnapScrollSection id='contact-us' >
          <ContactUs/>
        </SnapScrollSection>
        <SnapScrollSection id='faq'>
          <FAQ />
        </SnapScrollSection>
        <SnapScrollSection id='faq'>
          <Footer />
        </SnapScrollSection>
      </SnapScrollContainer>
      {console.log(activeSection)}
    </div>
  );
};

export default App;
