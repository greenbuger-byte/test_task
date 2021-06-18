import React from 'react';
import '../../../styles/Apartment.scss';
import homeImage from '../../../assets/imgs/home_index.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMapMarked, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import {roomTranslate} from "../../../utils/roomTransliter";


export const Apartment = ({id, apartment:{attributes, relationships}, like, setLikeHandler}) => {


    return (
        <div className={'apartment'}>
            <div className={'apartment__inner'}>
                <div className={'apartment__image-box'} style={{backgroundImage: `url(${homeImage})`}}>
                    <div
                        className={'apartment__label apartment__label--is-left apartment__label--is-primary'}>
                        {attributes.rooms} {roomTranslate(attributes.rooms)}
                    </div>
                    <div className={'apartment__label apartment__label--is-right apartment__label--is-secondary'}>
                        {attributes.area} {attributes.unit}
                    </div>
                    <div onClick={()=>setLikeHandler(id)} className={`apartment__like ${like.length > 0 && like[0]?.status && 'apartment__like--is-active' }`}>
                        <FontAwesomeIcon icon={faHeart}/>
                    </div>
                </div>

                <div className={'apartment__title'}>{attributes.title}</div>
                <div className={'apartment__label-address'}>
                    <FontAwesomeIcon className={'apartment__icon'} icon={faMapMarked}/>
                        {attributes.address.street}   {attributes.address.house}   кв. {attributes.address.room}
                </div>
                <div className={'apartment__relationships'}>
                    <FontAwesomeIcon className={'apartment__icon'} icon={faUserCircle} />
                    <span className={'apartment__agent-name'}>
                        {relationships.attributes.last_name}    {relationships.attributes.first_name}  {relationships.attributes.middle_name}
                    </span>
                </div>
            </div>

        </div>
    );
};