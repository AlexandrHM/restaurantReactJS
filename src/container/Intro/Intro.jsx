import React from 'react';

import { kitchenGif } from '../../constants';
import './Intro.css';

const Intro = () => {
  return (
    <div className="app__video">
    <img src={kitchenGif} alt="kitchen" />
    </div>
  );
};

export default Intro;
