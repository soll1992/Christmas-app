import React from 'react'
import { Link } from 'react-router-dom'
import './nav-link.scss';

interface Props {
    class: string,
    link: string,

}

export function NavLink(props: Props) {
    return (
        <div className='nav-link'>
            <Link className={props.class} to={props.link}></Link>
        </div>
    )
}
