import React from 'react'
import './filter-select.scss';


export default function FilterSelect (props) {
    return (
    <select 
        className='select-head' 
        value={props.value}
        onChange={e => props.onChange(props.cards,e.target.value)}
        >            
        <option disabled value="">Сортировка</option>
        <option value="title">От А до Я</option>
        <option value="titleReverse">От Я до А</option>
        <option value="number">По количеству по возрастанию</option>
        <option value="numberReverse">По количеству по убыванию</option>
    </select>
    )
}
