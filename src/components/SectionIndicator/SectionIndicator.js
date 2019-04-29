import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { SectionIndicatorList, SectionIndicatorListItem } from './subcomponents';
import { GlobalContext } from '../../pages';
import theme from '../../config/theme';
import {fadeIn} from '../../utils/animations'


const StyledWrapper = styled.div`
  position: fixed;
  left: ${theme.rhythm(1)};
  top: 50%;
  transform: ${props => props.isHidden ? 'translateY(-50%) translateX(-150%)' : 'translateY(-50%) translateX(0)'};
  z-index: 1;
  transition: all 0.2s ease;
  ${fadeIn()};
  opacity: ${props => props.isHidden ? 0 : 1};
  @media(max-width: ${theme.breakpoints.l}){
    display: none;
  }
`;

const SectionIndicator = ({ isHidden, listItems }) => {

  const { currentSection } = useContext(GlobalContext);
  return (
    <StyledWrapper isHidden={isHidden}>
      <SectionIndicatorList>
        {listItems.map((listItem, i) => {
          listItem = listItem.toLowerCase();
          return (
            <ScrollLink
              to={listItem}
              spy={false}
              smooth={true}
              offset={listItem === 'home' ? 0 : 50}
              duration={500}
              key={listItem + i}
            >
              <SectionIndicatorListItem isActive={listItem === currentSection}>
                {listItem}
              </SectionIndicatorListItem>
            </ScrollLink>
          );
        })}
      </SectionIndicatorList>
    </StyledWrapper>
  );
};

export default SectionIndicator;
