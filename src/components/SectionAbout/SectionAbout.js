import React, { useContext } from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { FaBehance, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import {
  Anchor,
  Button,
  ButtonLabel,
  Container,
  SectionContent,
  SocialIcon,
  SocialIcons,
  SocialIconText,
} from '../common';

import { SectionTitleAbout } from './subcomponents';
import { GlobalContext } from '../../pages/index';
import theme from '../../config/theme';


const StyledWrapper = styled.section` 
  position: relative;
  min-height: 100vh;
  padding: ${theme.rhythm(4)} 0;
  overflow: hidden;
  z-index:0;
  transition: 0.5s;
  opacity: 1;
  ::before{
    position:absolute;
    top: 0; 
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: linear-gradient(135deg, rgba(249,249,252,1) 30%, rgba(222,222,222,0.5)), url(https://images2.imgbox.com/18/c1/NyPgIQ35_o.jpg) top center / cover;
    filter: blur(2px);
    z-index: -3;
    transition: 0.5s;
  }
  ::after{
    position:absolute;
    top: 0; 
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    background: none;
    z-index: -2;
    opacity: 0;
    transition: 0.5s;
    filter:  brightness(103%);
  }
  &.is-loaded{
    ::before{
      opacity: 0;
    }
    ::after{
      opacity: 1;
      background: linear-gradient(135deg, rgba(249,249,252,1) 25%, rgba(222,222,222,0.5)), url(https://images2.imgbox.com/db/3e/Iyl6rQ2w_o.jpg) top center / cover;
      filter: contrast(103%);
    }
  }
  @media(max-width: ${theme.breakpoints.s}){
    padding: ${theme.rhythm(3)} 0;
    ::after{
      background: linear-gradient(135deg, rgba(249,249,252,1) 10%, rgba(216,216,216, 0.75))!important;
    }
  }
`;

const SectionAbout = ({ id }) => {

    const { setCurrentSection } = useContext(GlobalContext);
    const handleIntersection = inView => {
      if (inView) {
        setCurrentSection('about');
        document.getElementById('about').classList.add('is-loaded');
      }
    };

    return (
      <InView onChange={handleIntersection} threshold={0.3}>
        <StyledWrapper id={id}>
          <Container>
            <SectionTitleAbout>About me</SectionTitleAbout>
            <SectionContent>
              <p>
                I'm programmer and graphic designer aspiring to further progress in the area of front-end
                development. I strive to make aesthetic, effective and modern websites, that are performant
                and pleasure to use.
              </p>
              <p>
                I'm interested in modern technologies, computer graphics and everything related to UI and UX.
                I'm am not afraid of taking on new challenges and learning new things.
              </p>
              <p>
                My goal is to improve in the area of web development, web design and computer graphics.
              </p>
              <h4 style={{ fontWeight: '800', marginTop: theme.rhythm(1), letterSpacing: '0.06rem' }}>
                MORE TECHNICALLY
              </h4>
              <p>
                I'm working with <b>HTML5</b>, <b>CSS3</b> <b>(BEM</b>, <b>SCSS</b>), <b>Styled Components</b>, <b>modern
                JS (ES6+)</b>, <b>React</b>, <b>GatsbyJS</b>, <b>gulp</b>, <b>webpack</b>, <b>npm/yarn</b>, <b>git</b>.
              </p>
              <p>
                In the past I've also done some work
                with <b>AngularJS</b>, <b>Java</b>, <b>Spring</b> and <b>PostgreSQL</b>.
              </p>
              <p>
                Feel free to contact me at any time.
              </p>
              <ButtonLabel style={{ marginTop: theme.rhythm(1) }}>
                YOU CAN FIND MY CV BELOW:
              </ButtonLabel>
              <Anchor
                style={{ alignSelf: 'center' }}
                href="/files/Jakub_Slowik_CV_en.pdf"
                rel="noopener noreferrer"
                target="_blank">
              <Button style={{ marginBottom: theme.rhythm(2) }}>
                MY CURRICULUM
                <FiFileText
                  style={{
                    color: theme.colors.colorPrimaryLight,
                    fontSize: '125%',
                    marginBottom: '-3px',
                    marginRight: '-7px',
                    marginLeft: '7px',
                  }}/>
              </Button>
            </Anchor>
            <SocialIcons>
              <Anchor href="https://linkedin.com/in/jakslo">
                <SocialIcon>
                  <FaLinkedin/>
                  <SocialIconText>LinkedIn profile</SocialIconText>
                </SocialIcon>
              </Anchor>
              <Anchor href="https://behance.net/jakslo">
                <SocialIcon>
                  <FaBehance/>
                  <SocialIconText>Behance portfolio</SocialIconText>
                </SocialIcon>
              </Anchor>
              <Anchor href="https://github.com/jakubslowik">
                <SocialIcon>
                  <FaGithub/>
                  <SocialIconText>GitHub repository</SocialIconText>
                </SocialIcon>
              </Anchor>
            </SocialIcons>
          </SectionContent>
        </Container>
      </StyledWrapper>
      </InView>
    );
  }
;

export default SectionAbout;