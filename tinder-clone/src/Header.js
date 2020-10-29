import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className='personIcon'/>
      </IconButton>
      
      <img src="http://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" className="logo"/>

      <IconButton>
        <ForumIcon fontSize="large" className='forumIcon'/>
      </IconButton>
      
    </div>
  )
}

export default Header
