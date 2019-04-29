import styled from 'styled-components';


const ProjectInfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #222;
  padding-bottom: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.borderColor || '#555'};
`;

export default ProjectInfoTitle;