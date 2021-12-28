import React from 'react'
import './button.scss'

export default function Button(props) {
    return (
        <button className={props.class} onClick={props.onClick}>{props.content}</button>
    )
}
