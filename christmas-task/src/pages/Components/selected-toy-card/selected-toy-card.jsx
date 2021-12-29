import React, {useRef, useEffect} from 'react'
import './selected-toy-card.scss';

export default function SelectedToyCard(props) {
    const refP = useRef()
    const refCard = useRef()


    useEffect(() => {
        props.refArrCards.push(refCard.current)
    })

    useEffect(() => {
        props.refArr.push(refP.current)
    })


    return (
        <div ref={refCard} className='selected-toy-card' data-card-num={props.dataArr.num}  id={props.dataArr.num} >
            <p ref={refP} data-p-num={props.dataArr.num} className='count'>{props.dataArr.count} </p>
            {[...Array(+props.dataArr.count)].map((_, i) => {
                return (
                    <img
                        className='selected-toy-img'
                        id={`${props.dataArr.num}-${i}`}
                        draggable="true"
                        data-num={props.dataArr.num}
                        alt="toy-img"
                        src={`toys/${props.dataArr.num}.png`}
                        key={i}
                        onDragStart={props.onDragStart}
                    />
                )
            })}
        </div>
    )
}
