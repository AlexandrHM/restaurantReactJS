import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Reservaciones</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Direccion desconocida, Calle Aletoria, Ubicacion, 19 M75</p>
        <p className="p__cormorant" style={{ color: '#40D2F0', margin: '2rem 0' }}>Horarios</p>
        <p className="p__opensans">Lun - Vie: 08:00 am - 11:00 pm</p>
        <p className="p__opensans">Sab - Dom: 10:00 am - 11:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Agendar</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.resbanner} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
