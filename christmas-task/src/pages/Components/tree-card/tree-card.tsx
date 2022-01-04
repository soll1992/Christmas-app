import React, { MouseEventHandler } from 'react'

interface Props {
    treeClass: string,
    onClick: MouseEventHandler,
}

export default function TreeCard(props: Props) {

    const treeClasses = `tree-card tree-${props.treeClass}`

    return (
        <div className={treeClasses} data-tree-num={props.treeClass} onClick={props.onClick}>
            
        </div>
    )
}
