import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { FaBehance, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Anchor, Container, Logo } from '../common';
import {
  FooterAddressCopyright,
  FooterCopyright,
  FooterMenu,
  FooterNav,
  FooterNavList,
  FooterNavListItem,
  FooterSocialIcon,
  FooterSocialIcons,
  FooterSocialIconsContent,
  FooterSocialIconsLabel,
  FooterStyledLink,
} from './subcomponents';

import theme from '../../config/theme';


const StyledWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #191919;
  background: linear-gradient(-15deg, #fdfbfb 0%, #ebedee 50%, #fdfbfb 100%);
  box-shadow: 0 -15px 45px rgba(255, 255, 255, 1);
  border-top: 1px dotted white;
  padding: ${theme.rhythm(5)} 0;
  @media(max-width: ${theme.breakpoints.m}){
    padding: ${theme.rhythm(3)} 0;
    height: auto;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: ${theme.breakpoints.m}){
     flex-direction: column;
  }
`;


const Footer = () => {
  const navItems = ['About', 'Projects', 'Contact'];
  return (<StyledWrapper>
      <Container>
        <FlexWrapper>
          <FooterMenu>
            <Link style={{ borderRadius: 999, lineHeight: 0 }} to="/">
              <Logo width={theme.rhythm(2.25)} height={theme.rhythm(2.25)}/>
            </Link>
            <FooterNav>
              <FooterNavList>
                {navItems.map((item, i) =>
                  <ScrollLink
                    to={item.toLowerCase()}
                    spy={false}
                    smooth={true}
                    offset={50}
                    duration={500}
                    key={item + i}
                  >
                    <FooterNavListItem>{item}</FooterNavListItem>
                  </ScrollLink>,
                )}
              </FooterNavList>
            </FooterNav>
          </FooterMenu>
          <FooterAddressCopyright>
            <FooterStyledLink href="/">www.slowikjakub.eu</FooterStyledLink>
            <FooterCopyright>© {new Date().getFullYear()}</FooterCopyright>
          </FooterAddressCopyright>
          <FooterSocialIcons>
            <FooterSocialIconsLabel>
              Social links:
            </FooterSocialIconsLabel>
            <FooterSocialIconsContent>
              <Anchor href="https://linkedin.com/in/jakslo">
                <FooterSocialIcon>
                  <FaLinkedin/>
                </FooterSocialIcon>
              </Anchor>
              <Anchor href="https://behance.net/jakslo">
                <FooterSocialIcon>
                  <FaBehance/>
                </FooterSocialIcon>
              </Anchor>
              <Anchor href="https://github.com/jakubslowik">
                <FooterSocialIcon>
                  <FaGithub/>
                </FooterSocialIcon>
              </Anchor>
            </FooterSocialIconsContent>
          </FooterSocialIcons>
        </FlexWrapper>
      </Container>
    </StyledWrapper>
  );
};

export default Footer;
