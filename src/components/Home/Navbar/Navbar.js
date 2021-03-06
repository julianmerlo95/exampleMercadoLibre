import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import MenuNavbar from './MenuNavbar/MenuNavbar';
import './Navbar.sass'
import Shop from './Shop/Shop';
import {
  order, cross, shop, arrayListDownCenter,
  arrayListDownRight, logo, coronavirus, location
} from './data';

class Navbar extends PureComponent {

  state = {
    toggleMenu: false,
    toggleShop: false
  }

  menuHandler = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  shopHandler = () => {
    this.setState({ toggleShop: !this.state.toggleShop });
  }

  render() {

    const { toggleMenu, toggleShop } = this.state;

    let renderMenuNavbar = false;

    if (toggleMenu) {
      this.setState({ toggleShop: false });
      renderMenuNavbar = (
        <div>
          <MenuNavbar />
        </div>
      )
    } else if (toggleShop) {
      this.setState({ toggleMenu: false });
      renderMenuNavbar = (
        <div>
          <Shop />
        </div>
      )
    }


    return (
      <nav className="navbar">
        <div className="navbar__hidden">
          <div className="navbar__high__block__hidden">
            <div className="navbar__high__left__hidden">
              <svg onClick={this.menuHandler}
                className={`navbar__high__icon__hidden ${toggleMenu === false ? '-bars' : '-times'}`}
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" /><path d={`${toggleMenu === false ? `${order}` : `${cross}`}`} />
              </svg>
            </div>
            <div className="navbar__high__center__hidden">
              <input className="navbar__high__input--hidden"
                placeholder="Buscar productos, marcas y más..."></input>
            </div>
            <div className="navbar__high__right__hidden">
              <svg onClick={this.shopHandler}
                className={`navbar__high__icon__hidden`}
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" /><path d={shop} />
              </svg>
            </div>
          </div>
          <div className="navbar__high__block__down__hidden">
            <div className="navbar__high__left__send__hidden">
              <svg className={`navbar__high__icon__left__hidden`}
                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" /><path d={location} />
              </svg>
              <h5 className="navbar__high__title__left__hidden style-font">Enviar a Juan Perez</h5>
            </div>
            <div className="navbar__high__center__down__hidden">
              <i className="navbar__high__icon__down__hidden fas fa-angle-right"></i>
            </div>
          </div>
        </div>
        <>
          <div className="navbar__high">
            <div className="navbar__high__input--meli">
              <img src={logo} className="navbar__high__img--logo" alt="Navbar"></img>
            </div>
            <div className="navbar__high__block">
              <input onKeyPress={(event) => this.props.inputHandler(event)}
                className="navbar__high__input"
                placeholder="Buscar productos, marcas y más..."></input>
              <div className="navbar__high__block__icon">
                <i className="navbar__high__icon fas fa-search"></i>
              </div>
            </div>
            <div className="navbar__high__input--coronavirus">
              <img src={coronavirus} className=" navbar__high__img--coronavirus" alt="Navbar"></img>
            </div>
          </div>
          <div className="navbar__down">
            <div className="navbar__down__send">
              <div>
                <svg className={`navbar__down__send__icon`}
                  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none" /><path d={location} /></svg>
              </div>
              <div className="navbar__down__block">
                <h5 className="navbar__down__block__description">Enviar a Juan Perez</h5>
                <h5 className="navbar__down__block__title">Rosello 70</h5>
              </div>
            </div>
            <ul className="navbar__down__list--center">
              {arrayListDownCenter.map((item, index) =>
                <li key={index} className="navbar__down__list--center__item">
                  <NavLink to=""> {item.name} <i className={`navbar__down__list--center__icon ${item.icon}`}>
                  </i></NavLink></li>)}
            </ul>
            <ul className="navbar__down__list--right">
              {arrayListDownRight.map((item, index) =>
                <div key={index} className="navbar__down__list__container">
                  <li key={index} className="navbar__down__list--right__item">{item.name}</li>
                  <NavLink to="prueba">
                    <svg className={`navbar__down__list--center__icon`}
                      xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -5 24 24" width="23">
                      <path d="M0 0h24v24H0V0z" fill="none" /><path d={item.icon} /></svg>
                  </NavLink>
                </div>
              )}
            </ul>
          </div>
        </>
        {renderMenuNavbar}
      </nav >
    )
  }
}

export default Navbar;