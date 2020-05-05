import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButtons = () => (
  <div className='HeaderButtons'>
    <div className='HeaderButtonsRow'>
      <div className='HeaderButton'>
        <Link to='/new' className='HeaderLink'>New</Link>
      </div>
      <div className='HeaderButton'>
        <Link to='/settings' className='HeaderLink'>Settings</Link>
      </div>
      <div className='HeaderButton'>
        <Link to='/extra' className='HeaderLink'>Extra</Link>
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className='Header'>
    <Link to='/' className='HeaderTitle'>
      <h1>Empires App</h1>
    </Link>
    <HeaderButtons />
  </div>
);

export default Header;
