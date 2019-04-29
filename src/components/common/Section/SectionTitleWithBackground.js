import styled from 'styled-components';
import SectionTitle from './SectionTitle';


const SectionTitleWithBackground = styled(SectionTitle)`
  ::before{
    position: absolute;
    top: 50%;
    width: 250%;
    height: 300px;
    background: linear-gradient(135deg, rgba(255,255,255,0.99), rgba(249,249,252,0.75)), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAA1JREFUCNdjWMXAgIwBF/gCqezyVSAAAAAASUVORK5CYII=');  
    letter-spacing: 0;
    transition: all 0.5s ease;
    color: rgba(255,255,255,0.4);
    font-size: 25rem;
    font-family: GilroyBold, sans-serif;
    z-index: -1;
  }
`;

export default SectionTitleWithBackground;