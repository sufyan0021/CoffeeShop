import React from 'react';
import '../styles/menu-list-variant.css';
import menu from '../data/menu';

const MenuListVariant = ({ type }) => {
  return (
    <div>
      <h1 className="heading">Our Menu</h1>
      <div className="underline"></div>
      <div className="buttonContainer">
        <button className="button" onClick={() => {}}>
          All
        </button>
        <button className="button" onClick={() => {}}>
          BreakFast
        </button>
        <button className="button" onClick={() => {}}>
          Lunch
        </button>
        <button className="button" onClick={() => {}}>
          Shakes
        </button>
      </div>

      <div className="itemsContainer">
        {[...menu]
          .filter((menuItem) => menuItem.type === type)
          .map(({ id, name, img, price, text }) => {
            return (
              <div key={id} className="itemContainer">
                <div className="imageContainer">
                  <img className="image" src={img} alt=""></img>
                </div>

                <div className="infoContainer">
                  <div className="nameAndPriceContainer">
                    <h3>{name}</h3>
                    <h4 style={{ color: 'rgb(112, 80, 19)' }}>${price}</h4>
                  </div>

                  <div className="textContainer">{text}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuListVariant;
