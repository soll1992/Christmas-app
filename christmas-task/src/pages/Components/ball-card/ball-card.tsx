import React, { MouseEventHandler } from 'react';
import './ball-card.scss';
import { Data } from '../../interfaces'

type Props = {
    data: Data,
    favorite: Array<string>
    onClick: MouseEventHandler,
}

export function BallCard(props : Props) {
    const imgLink = `toys/${props.data.num}.png`
    let isFavorite : string
    if (props.data.favorite) {
        isFavorite = "да"
    } else {
        isFavorite = "нет"
    }

    function rerenderCardActivator() {
        return props.favorite.includes(props.data.num) ? 'ball-card active' : 'ball-card'
    }

    return ( 
        <div className={rerenderCardActivator()} data-num={props.data.num} onClick={props.onClick}>
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
