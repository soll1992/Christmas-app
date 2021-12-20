import React from 'react';
import './ball-card.scss';


export function BallCard(props) {
    const imgLink = `toys/${props.data.num}.png`
    let isFavorite 
    if (props.data.favorite) {
        isFavorite = "да"
    } else {
        isFavorite = "нет"
    }

    return ( 
        <div className="ball-card">
            <h3 className="ball-card__title">{props.data.name}</h3>
            <img src={imgLink} alt={props.data.name} className="ball-card__img" />
            <div className="ball-card__info">
                <p>Количество: {props.data.count}</p>
                <p>Год покупки: {props.data.year}</p>
                <p>Форма игрушки: {props.data.shape}</p>
                <p>Цвет игрушки: {props.data.color}</p>
                <p>Размер игрушки: {props.data.size}</p>
                <p>Любимая: {isFavorite}</p>
            </div>
        </div>
    );
}
