import React from 'react'

export default function Checkbox(props) {
    return (
        <input className={props.class} checked={true} type="checkbox" />
    )
}
