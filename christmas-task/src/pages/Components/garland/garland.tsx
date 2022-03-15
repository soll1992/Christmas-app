import React from 'react'

interface Props {
    width: number,
    amount: number,
    color: string,
}

export default function Garland(props: Props) {
    let arr: Array<string> = []
    let i = 0
    function createLi(n: number) {
        let result = 60

        for(let i = 0; i < n; i++) {
            arr.push(`rotate(${result}deg) translate(${props.width/2}px) rotate(-${result}deg)`)
            result += Math.round(60/n)      
        }
    }


    createLi(props.amount)


    return (
        <ul className='lightrope' style={{width: props.width + 'px', height: props.width}}>
            { arr.map(item => <li className={props.color} style={{transform: `${item}`}} key={i++}/>)}
        </ul>
    )
}

