import React from 'react'

export default function BgCard(props) {

    const bgClasses = `bg-card bg-${props.bgClass}`

    return (
        <div className={bgClasses} data-bg-num = {props.bgClass} onClick = {props.onClick}>
            
        </div>
    )
}
