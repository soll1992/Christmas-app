import React, { MouseEventHandler } from 'react'

interface Props {
    bgClass: string,
    onClick: MouseEventHandler,
}

export default function BgCard(props: Props) {

    const bgClasses = `bg-card bg-${props.bgClass}`

    return (
        <div className={bgClasses} data-bg-num = {props.bgClass} onClick = {props.onClick}>
            
        </div>
    )
}
