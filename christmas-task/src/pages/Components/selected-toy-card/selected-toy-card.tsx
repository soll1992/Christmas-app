import React, {useRef, useEffect, DragEventHandler } from 'react'
import './selected-toy-card.scss';
import { Data } from '../../interfaces'

interface Props {
    refArrCards: Array<HTMLDivElement | null>,
    refArr: Array<HTMLParagraphElement | null>,
    dataArr: Data,
    onDragStart: DragEventHandler,
}

export default function SelectedToyCard(props: Props) {
    const refP: React.MutableRefObject<HTMLParagraphElement | null> = useRef(null)
    const refCard: React.MutableRefObject<HTMLDivElement | null> = useRef(null)


    useEffect(() => {
        if(refCard.current !== undefined) {
            props.refArrCards.push(refCard.current)
        }
    })

    useEffect(() => {
        if(refP.current !== undefined) {
            props.refArr.push(refP.current)
        }        
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
