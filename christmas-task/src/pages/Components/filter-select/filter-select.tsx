import React, { FormEventHandler } from 'react'
import './filter-select.scss';

interface Props {
    value: string,
    onChange: FormEventHandler,
}

export default function FilterSelect (props: Props) {
    return (
    <select 
        className='select-head' 
        value={props.value}
        onChange={props.onChange}
        >            
        <option disabled value="">Сортировка</option>
        <option value="title">От А до Я</option>
        <option value="titleReverse">От Я до А</option>
        <option value="year">По году по возрастанию</option>
        <option value="yearReverse">По году по убыванию</option>
        <option value="number">По количеству по возрастанию</option>
        <option value="numberReverse">По количеству по убыванию</option>
    </select>
    )
}
