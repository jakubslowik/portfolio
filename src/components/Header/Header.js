import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { Logo } from '../common';
import { HeaderMobileMenuIcon, HeaderNav, HeaderNavList, HeaderNavListItem } from './subcomponents';
import { GlobalContext } from '../../pages/index';
import theme from '../../config/theme';
import {fadeIn} from '../../utils/animations'


const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: ${theme.rhythm(1)};
  ${fadeIn()};
  @media(max-width: ${theme.breakpoints.l}){
    justify-content: space-between;
  }
  @media(max-width: ${theme.breakpoints.s}){
    padding: ${theme.rhythm(0.5)};
  }
`;

const Header = () => {
  const { toggleMobileMenu } = useContext(GlobalContext);
  const navItems = [`About`, `Projects`, `Contact`];

  return (
    <StyledWrapper id="header">
      <Link style={{ borderRadius: 999, lineHeight: 0 }} to="/">
        <Logo/>
      </Link>
      <HeaderNav>
        <HeaderNavList>
          {navItems.map((navItem, i) => (
            <ScrollLink
              to={navItem.toLowerCase()}
              spy={false}
              smooth={true}
              offset={50}
              duration={500}
              key={'scrollLink' + navItem + i}
            >
              <HeaderNavListItem key={navItem + i}>
                {navItem}
              </HeaderNavListItem>
            </ScrollLink>
          ))}
        </HeaderNavList>
      </HeaderNav>
      <HeaderMobileMenuIcon isDark onClick={() => toggleMobileMenu(state => !state)}/>
    </StyledWrapper>
  );
};

export default Header;
