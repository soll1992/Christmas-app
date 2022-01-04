import React, { MouseEventHandler, FormEventHandler } from 'react'
import './MyInput.scss'

interface Props {
    value: string,
    onClick: MouseEventHandler,
    onChange: FormEventHandler,
}

export default function MyInput(props: Props) {
    return (
    <div className="input-wrapper">
        <input className='nav-input' id='input' value={props.value} type="text" placeholder='Поиск' onChange={props.onChange}/>
        <div className="cross" onClick={props.onClick}></div>
    </div>
    )
}
