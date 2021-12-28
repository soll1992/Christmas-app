import React, {useRef, useEffect} from 'react'
import './selected-toy-card.scss';

export default function SelectedToyCard(props) {
    const ref = useRef()


    useEffect(() => {
        props.refArr.push(ref.current)
    })


    return (
        <div className='selected-toy-card' id={props.dataArr.num} >
            <p ref={ref} data-p-num={props.dataArr.num} className='count'>{props.dataArr.count} </p>
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
