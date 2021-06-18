import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

import '../../styles/ContactHeader.scss';

export const ContactHeader = () => {
    return (
        <div className={'contact-header'}>
            <div className={'contact-header__inner'}>
                <div className={'contact-header__left-side'}>
                    <a className={'contact-header__link'} href={'/'}>
                        <FontAwesomeIcon icon={faPhone}/> +7 800 600 6006</a>
                </div>
                <div className={'contact-header__right-side'}>
                      <h3> <a className={'contact-header__link'} href={'/'}>LOGIN/REGISTER</a></h3>
            </div>
            </div>
        </div>
    );
};
