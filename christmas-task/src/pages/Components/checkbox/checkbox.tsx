import React, { MouseEventHandler } from 'react'

interface Props {
    id: string,
    class: string,
    refer: React.MutableRefObject<HTMLInputElement | null>,
    onClick: MouseEventHandler,
    textContent?: string,
    labelClass?: string,
}

export default function Checkbox(props: Props) {
    return (
        <><input id={props.id} className={props.class} ref={props.refer} onClick={props.onClick} type="checkbox" />
        <label className={props.id} htmlFor={props.id}>{props.textContent}</label></>
    )
}
