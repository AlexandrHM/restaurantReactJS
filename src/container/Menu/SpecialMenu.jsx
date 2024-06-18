import React, { useState, useEffect } from 'react';
import axios from "axios";
import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  /*Objetos*/
  const [menuItems, setMenuItems] = useState({ ap: [], fu: [], po: [], be: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /*Solicitud HTTP y filtrado de Datos
  AP -> Aperitivo
  FU -> Fuerte
  PO -> Postres
  BE -> Bebidas*/
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/restaurante') //<-- Api path
      .then(response => {
        const items = response.data;
        const categorizedItems = {
          ap: items.filter(item => item.categoria === 'AP'),
          fu: items.filter(item => item.categoria === 'FU'),
          po: items.filter(item => item.categoria === 'PO'),
          be: items.filter(item => item.categoria === 'BE'),
        };
        setMenuItems(categorizedItems);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  //Advertencia
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Section Missing Error API: {error.message}</div>;
  }
  return(
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Un menú a tu paladar" />
      <h1 className="headtext__cormorant">Nuestra Carta</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Aperitivos & Fuertes</p>
        <div className="app__specialMenu_menu_items">
          {/*Mapeo de los datos de la API*/}
          {menuItems.ap.map((item, index) => (
            <MenuItem key={item.nombre + index} title={item.nombre} price={item.precio} />
          ))}
          {menuItems.fu.map((item, index) => (
              <MenuItem key={item.nombre + index} title={item.nombre} price={item.precio} tags={item.descripcion} />
            ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu_card} alt="menu__card" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Postres & Bebidas</p>
        <div className="app__specialMenu_menu_items">
            {/*Mapeo de los datos de la API*/}
            {menuItems.po.map((item, index) => (
              <MenuItem key={item.nombre + index} title={item.nombre} price={item.precio} tags={item.descripcion} />
            ))}
            {menuItems.be.map((item, index) => (
              <MenuItem key={item.nombre + index} title={item.nombre} price={item.precio} tags={item.descripcion} />
            ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Ver lista</button>
    </div>
  </div>
);}

export default SpecialMenu;
