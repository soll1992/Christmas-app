import React, {useRef, useEffect, DragEventHandler } from 'react'
import './selected-toy-card.scss';

interface Data {
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
}

interface Props {
    value: string,
    refArrCards: Array<React.MutableRefObject<HTMLDivElement> | null>,
    refArr: Array<React.MutableRefObject<HTMLParagraphElement> | null>,
    dataArr: Data,
    onDragStart: DragEventHandler,
}

export default function SelectedToyCard(props: Props) {
    const refP = useRef(null)
    const refCard = useRef(null)


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
