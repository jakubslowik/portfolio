import React from 'react';
import { Footer } from '../../components';
import { GlobalStyle } from '../common';


const Layout = ({ children }) => (
  <>
    <GlobalStyle/>
    {children}
    <Footer/>
  </>
);

export default Layout;
