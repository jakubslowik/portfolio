import React from 'react';
import styled from 'styled-components';
import { ProjectInfoTitle } from '../../ProjectInfo/subcomponents';
import theme from '../../../config/theme';


const ProjectInfoTitleDetails = styled(({ borderColor, ...rest }) => <ProjectInfoTitle {...rest} />)`
  border-bottom-width: 3px;
  border-color: ${props => props.borderColor || '#555'};
  font-size: 2.5rem;
  line-height: 1;
  letter-spacing: -0.03rem;
  display: flex;
  justify-content: flex-start;
  svg{
    cursor: pointer;
    margin-left: auto;
    transition: 0.2s;
    :hover, :focus, :active{
      color: #777;
    }
  }
  @media(max-width: ${theme.breakpoints.l}){
    font-size: 1.75rem;
  }
`;

export default ProjectInfoTitleDetails;