import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nosotros</h1>
        <img src={images.sticker} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Ver más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.platillos_2} alt="about_platillos" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestro legado</h1>
        <img src={images.sticker} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Ver más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
