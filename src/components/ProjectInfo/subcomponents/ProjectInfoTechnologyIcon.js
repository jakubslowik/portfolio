import styled from 'styled-components';


const ProjectInfoTechnologyIcon = styled.div`
  position: relative;
  width: ${props => props.isBigger ? '36px' : '30px'};
  height: ${props => props.isBigger ? '36px' : '30px'};
  cursor: pointer;
  background-color: ${props => props.colorBrand || 'black'};
  mask: url(${props => props.url}) no-repeat 50% 50%;
  mask-size: cover;
  @media(max-width: 1700px){
    width: 24px;
    height: 24px;
  }
`;


export default ProjectInfoTechnologyIcon;