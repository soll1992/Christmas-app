import React from 'react'
import { Link } from 'react-router-dom'
import './nav-link.scss';

export function NavLink(props) {
    return (
        <div className='nav-link'>
            <Link className={props.class} to={props.link}></Link>
        </div>
    )
}
