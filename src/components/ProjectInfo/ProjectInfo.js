import React from 'react';
import styled from 'styled-components';
import { FaHandPointer } from 'react-icons/fa';
import {
  ProjectInfoDescription,
  ProjectInfoSeeDetails,
  ProjectInfoTechnologies,
  ProjectInfoTechnology,
  ProjectInfoTechnologyIcon,
  ProjectInfoTechnologyText,
  ProjectInfoTitle,
  ProjectInfoType,
} from './subcomponents';


// exporting styled component for hover animation reference in another styled component
export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0;
  padding: 1rem;
  color: #999;
  transition: 0.4s;
  border-radius: 4px;
  background: linear-gradient(145deg, rgba(255,255,255,0.99), rgba(233,233,233,0.95));
  :hover{
    transition-delay: -0.2s;
  }
`;

const ProjectInfo = ({ project, allTechnologies }) => {
  const { title, type, description_short, technologies_tools, color_primary } = project;
  return (
    <StyledWrapper>
      <ProjectInfoTitle borderColor={color_primary}>{title.text}</ProjectInfoTitle>
      <ProjectInfoType>{type}</ProjectInfoType>
      <ProjectInfoDescription>{description_short.text}</ProjectInfoDescription>
      <ProjectInfoTechnologies>
        {allTechnologies
          .filter(technology => technologies_tools.map(each => each.name).includes(technology.name.text))
          .map((technology, i) => (
            <ProjectInfoTechnology key={technology.name.text + i}>
              <ProjectInfoTechnologyIcon
                url={technology.logo.url}
                colorBrand={technology.color_brand}/>
              <ProjectInfoTechnologyText isLong={technology.name.text.length > 10}>
                {technology.name.text}
              </ProjectInfoTechnologyText>
            </ProjectInfoTechnology>),
          )}
      </ProjectInfoTechnologies>
      <ProjectInfoSeeDetails>
        <i>Click to see details</i> <FaHandPointer/>
      </ProjectInfoSeeDetails>
    </StyledWrapper>
  );
};

export default ProjectInfo;