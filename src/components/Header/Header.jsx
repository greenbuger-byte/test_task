import React, {useState} from 'react';
import '../../styles/Header.scss';
import {HeaderMenu} from "../HeaderMenu";
import {MobileMenu} from "../MobileMenu";

export const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div class={'header'}>
            <div className={'header__inner'}>
                <div className={'header__left-block header__block'}>
                    <div className={'header__logo'}>
                        <h1 className={'header__logo-text'}>myHome</h1>
                    </div>
                    <HeaderMenu/>
                    {visible && <MobileMenu setVisible={()=>setVisible(false)}/>}
                </div>
                <div className={'header__right-block header__block'}>
                    <div className={'header__submit'}>
                            SUBMIT LISTENING
                    </div>
                        <div className={'header__menu'} onClick={()=>setVisible(prev=>!prev)}>
                            <div className={'header__menu-line'}/>
                            <div className={'header__menu-line'}/>
                            <div className={'header__menu-line'}/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Header;