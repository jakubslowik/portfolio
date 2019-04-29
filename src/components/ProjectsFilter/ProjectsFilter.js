import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowWidth } from '../../hooks';
import { FiChevronDown } from 'react-icons/fi';
import { ProjectsFilterList, ProjectsFilterListItem, ProjectsFilterListLabel, ChevronIcon} from './subcomponents';
import { ProjectsContext } from '../SectionProjects/SectionProjects';
import { PROJECT_TYPES } from '../../config/website';
import theme from '../../config/theme';


const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  border-top: 1px dotted rgba(0,0,0,0.15);
  border-bottom: 1px dotted rgba(0,0,0,0.15);
  @media(max-width: ${theme.breakpoints.m}){
    justify-content: flex-start;
  }
`;

const ProjectsFilter = () => {

  const { activeProjectTypeFilter, setProjectTypeFilter } = useContext(ProjectsContext);
  const [isMobileFilterAccordionOpened, setMobileFilterAccordionOpened] = useState(false);

  let windowWidth = useWindowWidth();

  const breakpoint_m = theme.breakpoints.m.replace('px', '');

  useEffect(() => {
    windowWidth > breakpoint_m ? setMobileFilterAccordionOpened(false) : setMobileFilterAccordionOpened(true);
  }, [windowWidth]);

  return (
    <StyledWrapper>
      <ProjectsFilterListLabel>
        <i>Filter: </i>
      </ProjectsFilterListLabel>
      <ProjectsFilterList
        onClick={() => (windowWidth <= breakpoint_m) && setMobileFilterAccordionOpened(state => !state)}>
        {!isMobileFilterAccordionOpened ? PROJECT_TYPES.map((projectType, i) => {
            return (
              <ProjectsFilterListItem
                index={i}
                isActive={projectType === activeProjectTypeFilter}
                onClick={() => setProjectTypeFilter(projectType)}
                key={projectType + i}>
                {projectType}
              </ProjectsFilterListItem>
            );
          }) :
          <ProjectsFilterListItem
            isActive={true}>
            {activeProjectTypeFilter}
            <ChevronIcon>
              <FiChevronDown/>
            </ChevronIcon>
          </ProjectsFilterListItem>
        }
      </ProjectsFilterList>
    </StyledWrapper>
  );
};

export default ProjectsFilter;
