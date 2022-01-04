import React from 'react'

interface Props {
    class: string,
}

export default function Checkbox(props: Props) {
    return (
        <input className={props.class} checked={true} type="checkbox" />
    )
}
