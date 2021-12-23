import React, { useState, useEffect, useRef } from 'react';
import 'rc-slider/assets/index.css';
import './content.scss';
import { BallCard } from '../Components/ball-card/ball-card'
import { data } from '../../data'
import { NavLink } from '../Components/nav-link/nav-link'
import MyInput from '../Components/my-input/MyInput'
import FilterSelect from '../Components/filter-select/filter-select'
import Slider from 'rc-slider';


export function Content() {
    //стейты переменных и получение их значений из localStorage
    const [cards, setCards] = useState(() => {
        const saved = localStorage.getItem("cards");
        const initialValue = JSON.parse(saved);
        return initialValue || data;
    });
    const [title, setTitle] = useState(() => {
        const initialValue = localStorage.getItem("title");
        return initialValue || '';
    });
    const [selectedSort, setSelectedSort] = useState(() => {
        const initialValue = localStorage.getItem("selectedSort");
        return initialValue || '';
    });
    const [sliderValues, setSliderYears] = useState(() => {
        const saved = localStorage.getItem("sliderValues");
        const initialValue = JSON.parse(saved);
        return initialValue || [1940,2021];
    }); 
    const [sliderCount, setSliderCount] = useState(() => {
        const saved = localStorage.getItem("sliderCount");
        const initialValue = JSON.parse(saved);
        return initialValue || [1,12];
    });
    const [toyCounter, setToyCounter] = useState(() => {
        const initialValue = localStorage.getItem("toyCounter");
        return +initialValue || 0;
    });
    const [favoriteToys, setFavoriteToys] = useState(() => {
        const saved = localStorage.getItem("favoriteToys");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    //ссылки на чекбоксы
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
    //тултипы для слайдера
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    //сохранение в localStorage всех state
    useEffect(() => {        	
        localStorage.setItem("cards", JSON.stringify(cards))
    }, [cards])

    useEffect(() => {
        localStorage.setItem("title", title)
    }, [title])

    useEffect(() => {
        localStorage.setItem("selectedSort", selectedSort)
    }, [selectedSort])

    useEffect(() => {
        localStorage.setItem("sliderValues", JSON.stringify(sliderValues))
    }, [sliderValues])

    useEffect(() => {
        localStorage.setItem("sliderCount", JSON.stringify(sliderCount))
    }, [sliderCount])

    useEffect(() => {
        localStorage.setItem("toyCounter", toyCounter)
    }, [toyCounter])

    useEffect(() => {
        localStorage.setItem("favoriteToys", JSON.stringify(favoriteToys))
    }, [favoriteToys])
    //сохранение в localStorage всех checkbox
    useEffect(() => {
        isBall.current.checked = JSON.parse(localStorage.getItem("ball")) || false
    })

    useEffect(() => {
        isBell.current.checked = JSON.parse(localStorage.getItem("bell")) || false
    })

    useEffect(() => {
        isCone.current.checked = JSON.parse(localStorage.getItem("cone")) || false
    })
    
    useEffect(() => {
        isSnowflake.current.checked = JSON.parse(localStorage.getItem("snowflake")) || false
    })
    
    useEffect(() => {
        isFigurine.current.checked = JSON.parse(localStorage.getItem("figurine")) || false
    })
    
    useEffect(() => {
        isWhite.current.checked = JSON.parse(localStorage.getItem("white")) || false
    })
    
    useEffect(() => {
        isYellow.current.checked = JSON.parse(localStorage.getItem("yellow")) || false
    })
    
    useEffect(() => {
        isRed.current.checked = JSON.parse(localStorage.getItem("red")) || false
    })
    
    useEffect(() => {
        isBlue.current.checked = JSON.parse(localStorage.getItem("blue")) || false
    })
    
    useEffect(() => {
        isGreen.current.checked = JSON.parse(localStorage.getItem("green")) || false
    })
    
    useEffect(() => {
        isSmall.current.checked = JSON.parse(localStorage.getItem("small")) || false
    })
    
    useEffect(() => {
        isMid.current.checked = JSON.parse(localStorage.getItem("mid")) || false
    })
    
    useEffect(() => {
        isBig.current.checked = JSON.parse(localStorage.getItem("big")) || false
    })

    useEffect(() => {
        isFavorite.current.checked = JSON.parse(localStorage.getItem("favorite")) || false
    })
    
    //заношу данные об активации чекбокса в localStorage
    function addCheckboxesToLocalStorage() {
        localStorage.setItem('ball', isBall.current.checked)
        localStorage.setItem('bell', isBell.current.checked)
        localStorage.setItem('cone', isCone.current.checked)
        localStorage.setItem('snowflake', isSnowflake.current.checked)
        localStorage.setItem('figurine', isFigurine.current.checked)
        localStorage.setItem('white', isWhite.current.checked)
        localStorage.setItem('yellow', isYellow.current.checked)
        localStorage.setItem('red', isRed.current.checked)
        localStorage.setItem('blue', isBlue.current.checked)
        localStorage.setItem('green', isGreen.current.checked)
        localStorage.setItem('small', isSmall.current.checked)
        localStorage.setItem('mid', isMid.current.checked)
        localStorage.setItem('big', isBig.current.checked)
        localStorage.setItem('favorite', isFavorite.current.checked)
    }
    
    //функция которая применяет все используемые фильтры
    function allFilters(val) {
        //объект в который передаются значения фильров
        const filters = {
            shape: false,
            color: false,
            size: false,
            favorite: false,
            year1: sliderValues[0],
            year2: sliderValues[1],
            count1: sliderCount[0],
            count2: sliderCount[1],
            name: title, 
        }
        //если функция вызывается на слайдере, то значения из слайдер устанавливаются в стейт
        //и передаются в объект фильтрации(filters)
        function setYearFilter (val) {
            setSliderYears(val)
            filters.year1 = val[0]
            filters.year2 = val[1]
        }
        //такой же принцип как у функции выше
        function setCountFilter (val) {
            setSliderCount(val)
            filters.count1 = val[0]
            filters.count2 = val[1]
        }
        //проверяет какие чекбоксы активны и передает нужные значения фильтрации в объект фильтрации
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
        //самая страшная функция во всей моей работе, если будет время,то перепишу
        //на последовательное применение фильтров, а сейчас это просто логическая цепочка
        //на 100 строк
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
        //функция для сортировки сразу после рендера отфильтрованных карточек
        function sortAfterFilter(sort) {
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
        //эта функция обрабатывает все события на фильрах. Логика ниже помогает понять где происходит
        //событие и вызов функции. Эти события могут быть на слайдерах или инпуте фильтра.
        if (Array.isArray(val)) {
            val[1] < 1000 ? setCountFilter(val) : setYearFilter(val)
        } else if (val.target.type === 'text') {
            setTitle(val.target.value)
            filters.name = val.target.value
        } else if (val.target.classList.value === 'cross') {
            filters.name = ''
        }

        addCheckboxesToLocalStorage()
        setFilter()

        
        //запускает функцию сортировки, если был выбран тип сортировки
        if (selectedSort !== '') {
            sortAfterFilter(selectedSort)
        } else {
            setCards(data.filter(el => logic(el)))
        }
    }
    //логика обычной сортировки без использования фильтров
    function sortLogic(arr,sort) {
        if (sort === 'title') {
            setCards(arr.sort((a,b) => a.name.localeCompare(b.name)))
        } else if (sort === 'titleReverse') {
            setCards(arr.sort((a,b) => a.name.localeCompare(b.name)).reverse())
        } else if (sort === 'number') {
            setCards(arr.sort((a,b) => a.count - b.count))
        } else if (sort === 'numberReverse') {
            setCards(arr.sort((a,b) => a.count - b.count).reverse())
        }
    }

    //сортировка при выборе типа сортировки в селекте
    function sortCards(sort) {
        setSelectedSort(sort)
        sortLogic(cards,sort)
    }
    //функция добавляет номер активной карточки в массив
    function addActiveCardsNumInArr(e) {
        const index = favoriteToys.indexOf(e.currentTarget.dataset.num)
        if (index !== -1) {
            setFavoriteToys(favoriteToys.filter(item => item !== e.currentTarget.dataset.num))
        } else {
            favoriteToys.push(e.currentTarget.dataset.num)
        }
    }
    //активирует или деактивирует карточку по клику, увеличивает или уменьшает счетчик игрушек
    function cardActivator(e) {
        if(e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active')
            addActiveCardsNumInArr(e)
            setToyCounter(toyCounter - 1)
        } else if (!e.currentTarget.classList.contains('active') && toyCounter < 20) {
            e.currentTarget.classList.add('active')
            addActiveCardsNumInArr(e)
            setToyCounter(toyCounter + 1)
        } else if (toyCounter === 20) {
            alert("Извините, все слоты для игрушек заполнены")
        }
    }
    //функция сброса всех фильров по клику на кнопку сброса
    function resetFilters() {
        setCards(data)
        sortLogic(data,selectedSort)
        //пришлось дублировать с явным false, т.к. функция отображала не верное значение чекбокса
        //скорее всего связано с тем что я использовал кнопку резет для сброса чекбоксов
        localStorage.setItem('ball', false)
        localStorage.setItem('bell', false)
        localStorage.setItem('cone', false)
        localStorage.setItem('snowflake', false)
        localStorage.setItem('figurine', false)
        localStorage.setItem('white', false)
        localStorage.setItem('yellow', false)
        localStorage.setItem('red', false)
        localStorage.setItem('blue', false)
        localStorage.setItem('green', false)
        localStorage.setItem('small', false)
        localStorage.setItem('mid', false)
        localStorage.setItem('big', false)
        localStorage.setItem('favorite', false)
        setTitle('')
        setSliderYears([1940,2021])
        setSliderCount([1,12])
    }
    //функция очистки инпута по клику на крестик
    function inputClear(e) {
        setTitle('')
        allFilters(e)
    }

    return <section className="content">
        <div className="filters">
            <div className='nav'>
                <NavLink class={'nav-link__link home-link'} link={'/'}/>
                <NavLink class={'nav-link__link tree-link'} link={'/tree'}/>  
                <MyInput value={title} 
                    onChange={e => allFilters(e)}
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
                    <input id='ball' className='custom-checkbox' ref={isBall} onClick={allFilters} type="checkbox" />
                    <label className='ball' htmlFor="ball"></label>
                    <input id='bell' className='custom-checkbox' ref={isBell} onClick={allFilters} type="checkbox" />
                    <label className='bell' htmlFor="bell"></label>
                    <input id='cone' className='custom-checkbox' ref={isCone} onClick={allFilters} type="checkbox" />
                    <label className='cone' htmlFor="cone"></label>
                    <input id='snowflake' className='custom-checkbox' ref={isSnowflake} onClick={allFilters} type="checkbox" />
                    <label className='snowflake' htmlFor="snowflake"></label>
                    <input id='figurine' className='custom-checkbox' ref={isFigurine} onClick={allFilters} type="checkbox" />
                    <label className='figurine' htmlFor="figurine"></label>
                </div>
                <div className="count-slider">
                    <h2>Количество экземпляров</h2>
                    <Range className='count-slider' allowCross={false} min={1} max={12} defaultValue={sliderCount} step={1} onAfterChange={(value) => allFilters(value)}/>
                </div>
                <div className="sliders">
                    <h2>Год приобретения</h2>
                    <Range className='year-slider' allowCross={false} min={1940} max={2021} defaultValue={sliderValues} step={1} onAfterChange={(value) => allFilters(value)}/>
                </div>
                <div className="color-checboxes">
                    <h2>Цвет:</h2>
                    <input id='white' className='custom-checkbox color' ref={isWhite} onClick={allFilters} type="checkbox" />
                    <label className='white' htmlFor="white"></label>
                    <input id='yellow' className='custom-checkbox color' ref={isYellow} onClick={allFilters} type="checkbox" />
                    <label className='yellow' htmlFor="yellow"></label>
                    <input id='red' className='custom-checkbox color' ref={isRed} onClick={allFilters} type="checkbox" />
                    <label className='red' htmlFor="red"></label>
                    <input id='blue' className='custom-checkbox color' ref={isBlue} onClick={allFilters} type="checkbox" />
                    <label className='blue' htmlFor="blue"></label>
                    <input id='green' className='custom-checkbox color' ref={isGreen} onClick={allFilters} type="checkbox" />
                    <label className='green' htmlFor="green"></label>
                </div>
                <div className="size-checkboxes">
                    <h2>Размер:</h2>
                    <input id='small' className='custom-checkbox size margin-fix' ref={isSmall} onClick={allFilters} type="checkbox" />
                    <label htmlFor="small">Маленький</label>
                    <input id='mid' className='custom-checkbox size' ref={isMid} onClick={allFilters} type="checkbox" />
                    <label htmlFor="mid">Средний</label>
                    <input id='big' className='custom-checkbox size' ref={isBig} onClick={allFilters} type="checkbox" />
                    <label htmlFor="big">Большой</label>
                </div>
                <div className="favorite-checkbox">
                    <h2>Любимые:</h2>
                    <input id='favorite' className="custom-checkbox favorite" ref={isFavorite} onClick={allFilters} type="checkbox"/>
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