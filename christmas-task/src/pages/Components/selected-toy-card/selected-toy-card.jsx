import React, {useRef} from 'react'
import './selected-toy-card.scss';

export default function SelectedToyCard(props) {
    const ref = useRef()

    props.refArr.push(ref.current)

    return (
        <div className='selected-toy-card' id={props.dataArr.num} ref={ref} data-num={props.dataArr.num}>
            <p className='count'>{props.dataArr.count}</p>
            {[...Array(+props.dataArr.count)].map((_, i) => {
                return (
                    <img 
                        className='selected-toy-img'
                        id={`${props.dataArr.num}-${i}`}
                        draggable="true"
                        alt="toy-img"
                        src={`toys/${props.dataArr.num}.png`}
                        key={i}
                        onDragStart={props.onDragStart}
                        onDrag={props.onDrag}
                    />
                )
            })}
        </div>
    )
}
