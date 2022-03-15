import React, { MouseEventHandler } from 'react'

interface Props {
    bgId: string,
    bgClass: string,
    onClick: MouseEventHandler,
}


export default function LightBtn(props: Props) {

    const lightClasses = `light-btn btn-${props.bgClass}`

    return (
        <button type='button' id={props.bgId} className={lightClasses} onClick={props.onClick}>
            
        </button>
    )
}
