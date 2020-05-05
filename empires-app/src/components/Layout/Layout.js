import React from 'react';

import Main from '../Main/Main';
import Header from '../Header/Header';

const Layout = ({ children }) => (
  <div className='Layout'>
    <Header />
    <Main>
      { children }
    </Main>
  </div>
);

export default Layout;
