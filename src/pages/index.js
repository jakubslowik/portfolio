import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import { Layout, Section, SEO } from '../components/common';

import {
  Header,
  Hero,
  MobileNav,
  SectionAbout,
  SectionContact,
  SectionIndicator,
  SectionProjects,
} from '../components';

export const GlobalContext = React.createContext(null);


const IndexPage = () => {

  const [currentSection, setCurrentSection] = useState('home');
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const [areProjectDetailsOpened, setProjectDetailsOpened] = useState(false);

  const mobileNavSpring = useSpring({
    transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
    opacity: isMobileMenuOpen ? 1 : 0,
    config: { mass: 1, tension: 2000, friction: 150 },
  });

  useEffect(() => {
    if (isMobileMenuOpen || areProjectDetailsOpened) {
      document.documentElement.classList.add('scroll-disabled');
    } else {
      document.documentElement.classList.remove('scroll-disabled');
    }
  }, [isMobileMenuOpen, areProjectDetailsOpened]);

  return <StaticQuery
    query={siteMetadataQuery}
    render={data => (
      <GlobalContext.Provider
        value={{
          currentSection,
          setCurrentSection,
          isMobileMenuOpen,
          toggleMobileMenu,
          areProjectDetailsOpened,
          setProjectDetailsOpened,
        }}>
        <MobileNav
          items={['About', 'Projects', 'Contact']}
          mobileNavSpring={mobileNavSpring}
        />
        <Layout>
          <SEO title={'slowikjakub.eu'} keywords={[`developer`, `designer`, `portfolio`, `gatsby`, `application`, `react`]}/>
          <Section id="home">
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Hero/>
          </Section>
          <SectionAbout id="about"/>
          <SectionProjects id="projects"/>
          <SectionContact id="contact"/>
        </Layout>
        <SectionIndicator
          isHidden={areProjectDetailsOpened}
          listItems={['Home', 'About', 'Projects', 'Contact']}/>
      </GlobalContext.Provider>
    )}
  />;
};


const siteMetadataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default IndexPage;
