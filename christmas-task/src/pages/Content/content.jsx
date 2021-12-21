import React, { useState, useRef } from 'react';
import 'rc-slider/assets/index.css';
import './content.scss';
import { BallCard } from '../Components/ball-card/ball-card'
import { data } from '../../data'
import { NavLink } from '../Components/nav-link/nav-link'
import MyInput from '../Components/my-input/MyInput'
import FilterSelect from '../Components/filter-select/filter-select'
import Slider from 'rc-slider';


export function Content() {
    const [cards, setCards] = useState(data);
    const [title, setTitle] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
    const isBall = useRef()
    const isBell = useRef()
    const isCone = useRef()
    const isSnowflake = useRef()
    const isFigurine = useRef()
    const isWhite = useRef()    
    const isYellow = useRef()
    const isRed = useRef()
    const isBlue = useRef()
    const isGreen = useRef() 
    const isSmall = useRef()
    const isMid = useRef()
    const isBig = useRef()
    const isFavorite = useRef()
    const [currentArr, setCurrentArr] = useState([]);
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const [sliderValues, setSliderValues] = useState([1940,2021]); 
    const [sliderCount, setSliderCount] = useState([1,12]);
    const [toyCounter, setToyCounter] = useState(0);

    function checkboxFilter() {
        const filters = {
            shape: false,
            color: false,
            size: false,
            favorite: false
        }
        function setFilter() {
            if (isBall.current.checked) { 
                filters.shape1 = 'шар' 
                filters.shape = true
            }
            if (isBell.current.checked) { 
                filters.shape2 = 'колокольчик' 
                filters.shape = true
            }
            if (isCone.current.checked) { 
                filters.shape3 = 'шишка' 
                filters.shape = true
            }
            if (isSnowflake.current.checked) { 
                filters.shape4 = 'снежинка' 
                filters.shape = true
            }
            if (isFigurine.current.checked) { 
                filters.shape5 = 'фигурка' 
                filters.shape = true
            }
            
            if (isWhite.current.checked) { 
                filters.color1 = 'белый'
                filters.color = true
            }
            if (isYellow.current.checked) { 
                filters.color2 = 'желтый'
                filters.color = true
            }
            if (isRed.current.checked) { 
                filters.color3 = 'красный'
                filters.color = true
            }
            if (isBlue.current.checked) { 
                filters.color4 = 'синий'
                filters.color = true
            }
            if (isGreen.current.checked) { 
                filters.color5 = 'зелёный'
                filters.color = true
            }
            if (isSmall.current.checked) {
                filters.size1 = 'малый'
                filters.size = true
            }
            if (isMid.current.checked) {
                filters.size2 = 'средний'
                filters.size = true
            }
            if (isBig.current.checked) {
                filters.size3 = 'большой'
                filters.size = true
            }
            if (isFavorite.current.checked) {
                filters.favorite = true
            }
        }

        setFilter()

        function logic(item) {
            //форма
            if (filters.shape && !filters.color && !filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
            } //цвет
             else if (!filters.shape && filters.color && !filters.size && !filters.favorite) {
                return (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
            } //размер
             else if (!filters.shape && !filters.color && filters.size && !filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
            } //любимое
            else if (!filters.shape && !filters.color && !filters.size && filters.favorite) {
                return (item.favorite)
            } //форма+цвет
            else if (filters.shape && filters.color && !filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5) 
            } //размер+цвет
            else if (!filters.shape && filters.color && filters.size && !filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
            } //форма+размер 
            else if (filters.shape && !filters.color && filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
            } //форма+любимое
            else if (filters.shape && !filters.color && !filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
            } //цвет+любимое
            else if (!filters.shape && filters.color && !filters.size && filters.favorite) {
                return (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.favorite)
            } //размер+любимое 
            else if (!filters.shape && !filters.color && filters.size && filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
            }// форма+размер+любимое 
            else if (filters.shape && !filters.color && filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
            }// форма+цвет+любимое
            else if(filters.shape && filters.color && !filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
            }//размер+цвет+любимое
            else if (!filters.shape && filters.color && filters.size && filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
            } // форма+размер+цвет
            else if (filters.shape && filters.color && filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
            } // форма+размер+цвет+любимое
            else if (filters.shape && filters.color && filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
            } else if (!filters.shape && !filters.color && !filters.size && !filters.favorite) {
                return true
            }       
        }

        setCards(data.filter(el => logic(el)))
        setCurrentArr(data.filter(el => logic(el)))
    }

    function search(e) {
        setTitle(e.target.value)
        if(isBall.current.checked || isBell.current.checked || isCone.current.checked || isSnowflake.current.checked || isFigurine.current.checked) {
            setCards(currentArr.filter( item => item.name.toLowerCase().includes(e.target.value)))
        } else {
            setCards(data.filter( item => item.name.toLowerCase().includes(e.target.value)))
        }
    }

    function sortCards(target,sort) {
        setSelectedSort(sort)
        if (sort === 'title') {
            setCards(target.sort((a,b) => a.name.localeCompare(b.name)))
        } else if (sort === 'titleReverse') {
            setCards(target.sort((a,b) => a.name.localeCompare(b.name)).reverse())
        } else if (sort === 'number') {
            setCards(target.sort((a,b) => a.count - b.count))
        } else {
            setCards(target.sort((a,b) => a.count - b.count).reverse())
        }
    }

    function yearFilter (val) {
        setSliderValues(val)
        setCards(cards.filter(item => item.year >= val[0] && item.year <= val[1]))
    }

    function countFilter (val) {
        setSliderCount(val)
        setCards(cards.filter(item => item.count >= val[0] && item.count <= val[1]))
    }

    function cardActivator(e) {
        if(e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
            setToyCounter(toyCounter - 1)
        } else if (!e.currentTarget.classList.contains('active') && toyCounter < 20) {
            e.currentTarget.classList.add('active')
            setToyCounter(toyCounter + 1)
        } else if (toyCounter === 20) {
            alert("Извините, все слоты для игрушек заполнены")
        }
    }

    return <section className="content">
        <div className="filters">
            <div className='nav'>
                <NavLink class={'nav-link__link home-link'} link={'/'}/>
                <NavLink class={'nav-link__link tree-link'} link={'/tree'}/>  
                <MyInput value={title} 
                    type="text" 
                    placeholder='Поиск'
                    onChange={e => search(e)}
                />
            </div>
            <div className="toy-counter">
                Игрушек выбрано: {toyCounter}
            </div>
            <FilterSelect 
                value={selectedSort}
                onChange={sortCards}
                cards={cards}/>
            <div className="shape-checkboxes">
                <h2>Форма</h2>
                <input className='ball' ref={isBall} onClick={checkboxFilter} type="checkbox" />
                <input className='bell' ref={isBell} onClick={checkboxFilter} type="checkbox" />
                <input className='cone' ref={isCone} onClick={checkboxFilter} type="checkbox" />
                <input className='snowflake' ref={isSnowflake} onClick={checkboxFilter} type="checkbox" />
                <input className='figurine' ref={isFigurine} onClick={checkboxFilter} type="checkbox" />
            </div>
            <div className="count-slider">
            <Range className='count-slider' min={1} max={12} defaultValue={sliderCount} step={1} onAfterChange={value => countFilter(value)}/>
            </div>
            <div className="sliders">
                <Range className='year-slider' min={1940} max={2021} defaultValue={sliderValues} step={1} onAfterChange={value => yearFilter(value)}/>
            </div>
            <div className="color-checboxes">
                <h2>Цвет</h2>
                <input className='white' ref={isWhite} onClick={checkboxFilter} type="checkbox" />
                <input className='yellow' ref={isYellow} onClick={checkboxFilter} type="checkbox" />
                <input className='red' ref={isRed} onClick={checkboxFilter} type="checkbox" />
                <input className='blue' ref={isBlue} onClick={checkboxFilter} type="checkbox" />
                <input className='green' ref={isGreen} onClick={checkboxFilter} type="checkbox" />
            </div>
            <div className="size-checkboxes">
                <h2>Размер</h2>
                <input className='small' ref={isSmall} onClick={checkboxFilter} type="checkbox" />
                <input className='mid' ref={isMid} onClick={checkboxFilter} type="checkbox" />
                <input className='big' ref={isBig} onClick={checkboxFilter} type="checkbox" />
            </div>
            <div className="favorite-checkbox">
                <h2>Любимые</h2>
                <input className="favorite" ref={isFavorite} onClick={checkboxFilter} type="checkbox"/>
            </div>
        </div>
        <div className="toys">
            <h2 className="content-title">Игрушки</h2>
            <div className='cards'>
                {cards.length ? cards.map(card => <BallCard data={card} key={+card.num} onClick={e => cardActivator(e)}/> )
                                : <h2>Ничего не найдено</h2>
                }
            </div>
        </div>

    </section>
}