import React from 'react'

export default function TreeCard(props) {

    const treeClasses = `tree-card tree-${props.treeClass}`

    return (
        <div className={treeClasses} data-tree-num={props.treeClass} onClick={props.onClick}>
            
        </div>
    )
}
