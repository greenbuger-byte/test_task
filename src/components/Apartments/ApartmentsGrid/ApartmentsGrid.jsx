import React from 'react';
import '../../../styles/ApartmentsGrid.scss';
import {Apartment} from "../Apartment";

export const ApartmentsGrid = ({apartments}) => {
    return (
        <div className={'apartments-grid'}>
            <div className={'apartments-grid__header-inner'}>
                <h3 className={'apartments-grid__subheader'}>
                    THE BEST DEALS
                </h3>
                <h1 className={'apartments-grid__header'}>
                    Featured Properties
                </h1>
            </div>

            <div className={'apartments-grid__inner'}>
                {apartments  && apartments.map(apartment=>  <Apartment   key={apartment.id} apartment={apartment}/>)}
            </div>
        </div>
    );
};
