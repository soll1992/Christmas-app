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
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const [sliderValues, setSliderValues] = useState([1940,2021]); 
    const [sliderCount, setSliderCount] = useState([1,12]);
    const [toyCounter, setToyCounter] = useState(0);
    const [favoriteToys, setFavoriteToys] = useState([])

    function checkboxFilter(val) {
        const filters = {
            shape: false,
            color: false,
            size: false,
            favorite: false,
            year1: sliderValues[0],
            year2: sliderValues[1],
            count1: sliderCount[0],
            count2: sliderCount[1],
            name: '', 
        }

        function setYearFilter (val) {
            setSliderValues(val)
            filters.year1 = val[0]
            filters.year2 = val[1]
        }
    
        function setCountFilter (val) {
            setSliderCount(val)
            filters.count1 = val[0]
            filters.count2 = val[1]
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

        function logic(item) {
            //форма
            if (filters.shape && !filters.color && !filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)                
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //цвет
             else if (!filters.shape && filters.color && !filters.size && !filters.favorite) {
                return (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //размер
             else if (!filters.shape && !filters.color && filters.size && !filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //любимое
            else if (!filters.shape && !filters.color && !filters.size && filters.favorite) {
                return (item.favorite) 
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //форма+цвет
            else if (filters.shape && filters.color && !filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase()))) 
            } //размер+цвет
            else if (!filters.shape && filters.color && filters.size && !filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //форма+размер 
            else if (filters.shape && !filters.color && filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //форма+любимое
            else if (filters.shape && !filters.color && !filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //цвет+любимое
            else if (!filters.shape && filters.color && !filters.size && filters.favorite) {
                return (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.favorite)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } //размер+любимое 
            else if (!filters.shape && !filters.color && filters.size && filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            }// форма+размер+любимое 
            else if (filters.shape && !filters.color && filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            }// форма+цвет+любимое
            else if(filters.shape && filters.color && !filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.favorite)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            }//размер+цвет+любимое
            else if (!filters.shape && filters.color && filters.size && filters.favorite) {
                return (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } // форма+размер+цвет
            else if (filters.shape && filters.color && filters.size && !filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.year >= filters.year1 && item.year <= filters.year2) && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } // форма+размер+цвет+любимое
            else if (filters.shape && filters.color && filters.size && filters.favorite) {
                return (item.shape === filters.shape1 || item.shape === filters.shape2 || item.shape === filters.shape3 || item.shape === filters.shape4 || item.shape === filters.shape5)
                && (item.color === filters.color1 || item.color === filters.color2 || item.color === filters.color3 || item.color === filters.color4 || item.color === filters.color5)
                && (item.size === filters.size1 || item.size === filters.size2 || item.size === filters.size3 || item.size === filters.size4 || item.size === filters.size5)
                && (item.favorite)
                && (item.year >= filters.year1 && item.year <= filters.year2) 
                && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase())))
            } else if (!filters.shape && !filters.color && !filters.size && !filters.favorite) {
                return ((item.year >= filters.year1 && item.year <= filters.year2) 
                && (item.count >= filters.count1 && item.count <= filters.count2)
                && ((filters.name === '') || (item.name.toLowerCase().includes(filters.name.toLowerCase()))))
            }       
        }

        function sortAfterFilte(sort) {
            if (sort === 'title') {
                setCards((data.filter(el => logic(el))).sort((a,b) => a.name.localeCompare(b.name)))
            } else if (sort === 'titleReverse') {
                setCards((data.filter(el => logic(el))).sort((a,b) => a.name.localeCompare(b.name)).reverse())
            } else if (sort === 'number') {
                setCards((data.filter(el => logic(el))).sort((a,b) => a.count - b.count))
            } else if (sort === 'numberReverse') {
                setCards((data.filter(el => logic(el))).sort((a,b) => a.count - b.count).reverse())
            }
        }

        if (Array.isArray(val)) {
            val[1] < 1000 ? setCountFilter(val) : setYearFilter(val)
        } else if (val.target.type === 'text') {
            setTitle(val.target.value)
            filters.name = val.target.value
        }

        setFilter()


        if (selectedSort !== '') {
            sortAfterFilte(selectedSort)
        } else {
            setCards(data.filter(el => logic(el)))
        }
    }


    function sortCards(sort) {
        setSelectedSort(sort)
        if (sort === 'title') {
            setCards(cards.sort((a,b) => a.name.localeCompare(b.name)))
        } else if (sort === 'titleReverse') {
            setCards(cards.sort((a,b) => a.name.localeCompare(b.name)).reverse())
        } else if (sort === 'number') {
            setCards(cards.sort((a,b) => a.count - b.count))
        } else if (sort === 'numberReverse') {
            setCards(cards.sort((a,b) => a.count - b.count).reverse())
        }
    }

    function addActiveInCardObj(e) {
        const index = favoriteToys.indexOf(e.currentTarget.dataset.num)
        if (index !== -1) {
            setFavoriteToys(favoriteToys.filter(item => item !== e.currentTarget.dataset.num))
        } else {
            favoriteToys.push(e.currentTarget.dataset.num)
        }
    }

    function cardActivator(e) {
        console.log(e.currentTarget.dataset.num)
        if(e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
            addActiveInCardObj(e)
            setToyCounter(toyCounter - 1)
        } else if (!e.currentTarget.classList.contains('active') && toyCounter < 20) {
            e.currentTarget.classList.add('active')
            addActiveInCardObj(e)
            setToyCounter(toyCounter + 1)
        } else if (toyCounter === 20) {
            alert("Извините, все слоты для игрушек заполнены")
        }
    }

    function resetFilters() {
        setCards(data)
        setTitle('')
        setSliderValues([1940,2021])
        setSliderCount([1,12])
    }

    function inputClear(e) {
        setTitle('')
        checkboxFilter(e)
    }

    return <section className="content">
        <div className="filters">
            <div className='nav'>
                <NavLink class={'nav-link__link home-link'} link={'/'}/>
                <NavLink class={'nav-link__link tree-link'} link={'/tree'}/>  
                <MyInput value={title} 
                    onChange={e => checkboxFilter(e)}
                    onClick={e => inputClear(e)}
                />
            </div>
            <div className="toy-counter">
                Игрушек выбрано: {toyCounter}
            </div>
            <FilterSelect 
                value={selectedSort}
                onChange={sortCards}
                cards={cards}/>
            <form>
                <div className="shape-checkboxes">
                    <h2>Форма:</h2>
                    <input id='ball' className='custom-checkbox' ref={isBall} onClick={checkboxFilter} type="checkbox" />
                    <label className='ball' htmlFor="ball"></label>
                    <input id='bell' className='custom-checkbox' ref={isBell} onClick={checkboxFilter} type="checkbox" />
                    <label className='bell' htmlFor="bell"></label>
                    <input id='cone' className='custom-checkbox' ref={isCone} onClick={checkboxFilter} type="checkbox" />
                    <label className='cone' htmlFor="cone"></label>
                    <input id='snowflake' className='custom-checkbox' ref={isSnowflake} onClick={checkboxFilter} type="checkbox" />
                    <label className='snowflake' htmlFor="snowflake"></label>
                    <input id='figurine' className='custom-checkbox' ref={isFigurine} onClick={checkboxFilter} type="checkbox" />
                    <label className='figurine' htmlFor="figurine"></label>
                </div>
                <div className="count-slider">
                    <h2>Количество экземпляров</h2>
                    <Range className='count-slider' allowCross={false} min={1} max={12} defaultValue={sliderCount} step={1} onAfterChange={(value) => checkboxFilter(value)}/>
                </div>
                <div className="sliders">
                    <h2>Год приобретения</h2>
                    <Range className='year-slider' allowCross={false} min={1940} max={2021} defaultValue={sliderValues} step={1} onAfterChange={(value) => checkboxFilter(value)}/>
                </div>
                <div className="color-checboxes">
                    <h2>Цвет:</h2>
                    <input id='white' className='custom-checkbox color' ref={isWhite} onClick={checkboxFilter} type="checkbox" />
                    <label className='white' htmlFor="white"></label>
                    <input id='yellow' className='custom-checkbox color' ref={isYellow} onClick={checkboxFilter} type="checkbox" />
                    <label className='yellow' htmlFor="yellow"></label>
                    <input id='red' className='custom-checkbox color' ref={isRed} onClick={checkboxFilter} type="checkbox" />
                    <label className='red' htmlFor="red"></label>
                    <input id='blue' className='custom-checkbox color' ref={isBlue} onClick={checkboxFilter} type="checkbox" />
                    <label className='blue' htmlFor="blue"></label>
                    <input id='green' className='custom-checkbox color' ref={isGreen} onClick={checkboxFilter} type="checkbox" />
                    <label className='green' htmlFor="green"></label>
                </div>
                <div className="size-checkboxes">
                    <h2>Размер:</h2>
                    <input id='small' className='custom-checkbox size margin-fix' ref={isSmall} onClick={checkboxFilter} type="checkbox" />
                    <label htmlFor="small">Маленький</label>
                    <input id='mid' className='custom-checkbox size' ref={isMid} onClick={checkboxFilter} type="checkbox" />
                    <label htmlFor="mid">Средний</label>
                    <input id='big' className='custom-checkbox size' ref={isBig} onClick={checkboxFilter} type="checkbox" />
                    <label htmlFor="big">Большой</label>
                </div>
                <div className="favorite-checkbox">
                    <h2>Любимые:</h2>
                    <input id='favorite' className="custom-checkbox favorite" ref={isFavorite} onClick={checkboxFilter} type="checkbox"/>
                    <label htmlFor="favorite"></label>
                </div>
                <button className='reset-button' type='reset' onClick={resetFilters}>Сброс фильтров</button>
            </form>
        </div>
        <div className="toys">
            <h2 className="content-title">Игрушки</h2>
            <div className='cards'>
                {cards.length ? cards.map(card => <BallCard data={card} key={+card.num} favorite={favoriteToys} onClick={e => cardActivator(e)}/> )
                                : <h2>Ничего не найдено</h2>
                }
            </div>
        </div>

    </section>
}