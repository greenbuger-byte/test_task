import React from 'react';
import '../../styles/HeaderMenu.scss';

export const HeaderMenu = () => {
    return (
        <div className={'header-menu'}>
            <ul className={'header-menu__nav '}>
                <li className={'header-menu__nav-item'}>
                    <a className={'header-menu__link header-menu__link--active'} href={'/'}>Home</a>
                </li>
                <li className={'header-menu__nav-item'}>
                    <a className={'header-menu__link'} href={'/'}>Listing</a>
                </li>
                <li className={'header-menu__nav-item'}>
                    <a className={'header-menu__link'} href={'/'}>News</a>
                </li>
                <li className={'header-menu__nav-item'}>
                    <a className={'header-menu__link'} href={'/'}>Contact</a>
                </li>
            </ul>
        </div>
    );
};
