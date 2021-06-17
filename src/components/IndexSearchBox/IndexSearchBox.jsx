import React from 'react';
import  '../../styles/IndexSearchBox.scss';
import imageBackground from '../../assets/imgs/home_index.jpg';

export const IndexSearchBox = () => {
    return (
        <div className={'index-search-box'} style={{backgroundImage:`url(${imageBackground})`}}>
            <div className={'index-search-box__inner'}>
                <h1 className={'index-search-box__title'}>FOR SALE</h1>
                <h2 className={'index-search-box__subtitle'}>OVER 45.000$</h2>
            </div>
        </div>
    );
};
