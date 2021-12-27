import React from 'react'

export default function LightBtn(props) {

    const lightClasses = `light-btn btn-${props.bgClass}`

    return (
        <button type='button' id={props.bgId} className={lightClasses} onClick={props.onClick}>
            
        </button>
    )
}
