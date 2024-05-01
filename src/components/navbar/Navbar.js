import React from 'react';
import cart from '../assets/basket.png'
import info from "../assets/info.png"
import icinfo from "../assets/ic_info.svg"
import icmenu from "../assets/ic_menu.svg"


const Navbar = () => {
    return (
        <header className="header">
            <div className="container container--header">
                <div className="header__logo">Photobrix</div>
                <ul className="menu">
                    <li className="menu__item">
                        <img src={cart} alt="cart" />
                        <a href="https://www.wildberries.ru/catalog/155355763/detail.aspx" rel="nofollow" target="_blank">
                            Buy a set
                        </a>
                    </li>
                    <li className="menu__item">
                        <img src={info} alt="info" />
                        <a href="#instruction">
                            Instructions
                        </a>
                    </li>
                </ul>
                {/* Uncomment if needed */}
                {/* <a href="/profile.html" className="menu__link">Личный кабинет</a> */}
                <ul className="menu--mobile">
                    <li className="menu__item">
                        <a href="#instruction">
                            <img src={icinfo} alt="info" />
                        </a>
                    </li>
                    <li className="menu__item" id="expand">
                        <a href="#">
                            <img src={icmenu} alt="menu" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};


export default Navbar;