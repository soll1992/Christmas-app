import React from 'react'
import './home.scss';
import { Link } from 'react-router-dom'

export function Home() {
    return <section className="home">
        <div className="wrapper">
            <div className="title blur">
                <h1 className="title-text">Помогите бабушке нарядить елку</h1>
            </div>
            <Link className='content-link blur' to={'/content'}>{'Начать'}</Link>
        </div>
    </section>
}