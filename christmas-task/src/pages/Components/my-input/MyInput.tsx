import React, { MouseEventHandler, FormEventHandler, useEffect, useRef } from 'react'
import './MyInput.scss'

interface Props {
    value: string,
    onClick: MouseEventHandler,
    onChange: FormEventHandler,
}

export default function MyInput(props: Props) {

    const isInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null)

    useEffect(() => {
        isInput.current?.focus()
    }, [])

    return (
    <div className="input-wrapper">
        <input className='nav-input' ref={isInput} id='input' value={props.value} type="text" placeholder='Поиск' onChange={props.onChange}/>
        <div className="cross" onClick={props.onClick}></div>
    </div>
    )
}
