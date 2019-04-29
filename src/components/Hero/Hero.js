import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { InView } from 'react-intersection-observer';
import { Button, ButtonLabel, Container } from '../common';
import {
  Br,
  HeroBackground,
  HeroButtonGroup,
  HeroSubtitle,
  HeroTitle,
  HeroWelcome,
  IntroParagraph,
} from './subcomponents';

import { GlobalContext } from '../../pages/index';
import theme from '../../config/theme';

import {fadeIn} from '../../utils/animations'

const StyledWrapper = styled.section`
  position: relative;
  min-height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${theme.rhythm(1)} 0;
  ${fadeIn()};
  @media(max-width: ${theme.breakpoints.s}){
     justify-content: flex-end;
     min-height: calc(100vh - 86px);
  }
  @media(max-width: ${theme.breakpoints.xs}){
    padding: ${theme.rhythm(2)} 0 ${theme.rhythm(1)};
    justify-content: flex-end;
  }
  @media(max-width: ${theme.breakpoints.s}) and (min-height: 800px){
     justify-content: center;
  }
`;

const Hero = () => {

  const { setCurrentSection } = useContext(GlobalContext);

  const handleIntersection = inView => {
    if (inView) {
      setCurrentSection('home');
      document.getElementById('header').classList.add('is-loaded');
    }
  };

  return (
    <>
      <HeroBackground id="heroBackground"/>
      <InView onChange={handleIntersection} threshold={0.6}>
        <Container>
          <StyledWrapper>
            <HeroWelcome>Welcome on my website!</HeroWelcome>
            <HeroTitle>My name is Jakub Słowik</HeroTitle>
            <HeroSubtitle>
              I'm a <strong>front-end developer</strong> <Br hideDesktop/>& <i style={{ marginRight: '3px' }}>graphic
              designer</i>
            </HeroSubtitle>
            <IntroParagraph>
              I strive to make aesthetic, effective and modern websites, that are performant and pleasure to use.
            </IntroParagraph>
            <HeroButtonGroup>
              <ButtonLabel>Click to see my projects:</ButtonLabel>
              <ScrollLink
                to={'projects'}
                spy={false}
                smooth={true}
                offset={50}
                duration={500}
              >
                <Button>See my portfolio</Button>
              </ScrollLink>
            </HeroButtonGroup>
          </StyledWrapper>
        </Container>
      </InView>
    </>
  );
};

export default Hero;
