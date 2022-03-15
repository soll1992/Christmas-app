import React, { MouseEventHandler } from 'react'
import './button.scss'

type Props = {
    class: string,
    content?: string,
    onClick: MouseEventHandler,
}

export default function Button(props : Props) {
    return (
        <button className={props.class} onClick={props.onClick}>{props.content}</button>
    )
}
