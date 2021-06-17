import React from 'react';
import '../../styles/MobileMenu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = ({setVisible}) => {
    return (
        <div className={'mobile-menu'}>
            <div className={'mobile-menu__wrapper'}></div>
            <div className={'mobile-menu__inner '}>
                <div className={'mobile-menu__header'}>
                    <div className={'mobile-menu__header-close'}>
                        <FontAwesomeIcon  onClick = {setVisible} icon={faWindowClose}/>
                    </div>

                </div>
                <ul className={'mobile-menu__nav'}>
                    <li className={'mobile-menu__nav-item'}>
                        <a className={'mobile-menu__link mobile-menu__link--active'} href={'/'}>Home</a>
                    </li>
                    <li className={'mobile-menu__nav-item'}>
                        <a className={'mobile-menu__link'} href={'/'}>Listing</a>
                    </li>
                    <li className={'mobile-menu__nav-item'}>
                        <a className={'mobile-menu__link'} href={'/'}>News</a>
                    </li>
                    <li className={'mobile-menu__nav-item'}>
                        <a className={'mobile-menu__link'} href={'/'}>Contact</a>
                    </li>
                </ul>
                <div className={'mobile-menu__footer'}>
                    <a className={'mobile-menu__footer-link'} href={'/'}>LOGIN/REGISTER</a>
                </div>
            </div>
        </div>
    );
};
