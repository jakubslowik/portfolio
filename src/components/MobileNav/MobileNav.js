import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { X } from '../common';
import { MobileNavFullscreenOverlay, MobileNavList, MobileNavListItem } from './subcomponents';
import { GlobalContext } from '../../pages/index';


const MobileNav = ({ items }) => {
  const { isMobileMenuOpen, toggleMobileMenu } = useContext(GlobalContext);
  return (
    <MobileNavFullscreenOverlay isMobileMenuOpen={isMobileMenuOpen}>
      <MobileNavList>
        {items.map((item, i) => {
          item = item.toLowerCase();
          return (
            <ScrollLink
              to={item}
              spy={false}
              smooth={true}
              offset={50}
              duration={500}
              key={'mobile menu nav item' + i}
            >
              <MobileNavListItem onClick={() => toggleMobileMenu(false)}>
                {item}
              </MobileNavListItem>
            </ScrollLink>
          );
        })}
      </MobileNavList>
      <X isDark={true} onClick={() => toggleMobileMenu(false)}/>
    </MobileNavFullscreenOverlay>
  );
};

export default MobileNav;