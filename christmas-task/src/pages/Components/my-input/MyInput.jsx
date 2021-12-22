import React from 'react'
import './MyInput.scss'

export default function MyInput(props) {
    return (
    <div className="input-wrapper">
        <input className='nav-input' value={props.value} type="text" placeholder='Поиск' onChange={props.onChange}/>
        <div className="cross" onClick={props.onClick}></div>
    </div>
    )
}
