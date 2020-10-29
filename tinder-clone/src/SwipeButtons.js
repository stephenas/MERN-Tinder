import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className="replayIcon">
        <ReplayIcon fontSize='default'/>
      </IconButton>

      <IconButton className="closeIcon">
        <CloseIcon fontSize='default'/>
      </IconButton>

      <IconButton className="starRateIcon">
        <StarRateIcon fontSize='default'/>
      </IconButton>

      <IconButton className="favoriteIcon">
        <FavoriteIcon fontSize='default'/>
      </IconButton>

      <IconButton className="flashOnIcon">
        <FlashOnIcon fontSize='default'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
