import React, { useState, useEffect, useRef } from 'react';
import 'rc-slider/assets/index.css';
import './content.scss';
import Toys from './toys/toys'
import { data } from '../../data'
import { NavLink } from '../Components/nav-link/nav-link'
import MyInput from '../Components/my-input/MyInput'
import FilterSelect from '../Components/filter-select/filter-select'
import Slider from 'rc-slider';
import { Data, Filters } from '../interfaces'
import Checkbox from '../Components/checkbox/checkbox'

interface Props {
    selectedToysArr: Array<number>
    setSelected: React.Dispatch<React.SetStateAction<Array<string>>>
}


export function Content(props: Props) {
    //стейты переменных и получение их значений из localStorage
    const [cards, setCards] = useState<Array<Data>>(() => {
        const saved = localStorage.getItem("cards");
        if(saved !== null && saved !== undefined) {
            const initialValue = JSON.parse(saved);
            return initialValue        
        } else {
            return data
        }
    });
    const [title, setTitle] = useState(() => {
        const initialValue = localStorage.getItem("title");
        return initialValue || '';
    });
    const [selectedSort, setSelectedSort] = useState(() => {
        const initialValue = localStorage.getItem("selectedSort");
        return initialValue || '';
    });
    const [sliderValues, setSliderYears] = useState<Array<number>>(() => {
        const saved = localStorage.getItem("sliderValues");
        if(saved !== null && saved !== undefined) {
            const initialValue = JSON.parse(saved);
            return initialValue        
        } else {
            return  [1940,2021]
        }});
         
    const [sliderCount, setSliderCount] = useState<Array<number>>(() => {
        const saved = localStorage.getItem("sliderCount");
        if(saved !== null && saved !== undefined) {
            const initialValue = JSON.parse(saved);
            return initialValue        
        } else {
            return [1,12]
        }});


    const [toyCounter, setToyCounter] = useState(() => {
        const initialValue = localStorage.getItem("toyCounter")!;
        return +initialValue || 0; 
    });
    const [favoriteToys, setFavoriteToys] = useState<Array<string>>(() => {
        const saved = localStorage.getItem("favoriteToys");
        if(saved !== null && saved !== undefined) {
            const initialValue = JSON.parse(saved);
            return initialValue        
        } else {
            return []
        }});

    useEffect(() => {
        localStorage.setItem("selectedToysArr", JSON.stringify(props.selectedToysArr))
      })

    //ссылки на чекбоксы
    const isBall: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isBell: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isCone: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isSnowflake: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isFigurine: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isWhite: React.MutableRefObject<HTMLInputElement | null> = useRef(null)    
    const isYellow: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isRed: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isBlue: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isGreen: React.MutableRefObject<HTMLInputElement | null> = useRef(null) 
    const isSmall: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isMid: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isBig: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    const isFavorite: React.MutableRefObject<HTMLInputElement | null> = useRef(null)

    const shapeCheckboxes: Array<[string, React.MutableRefObject<HTMLInputElement | null>]> = [['ball', isBall], ['bell', isBell], ['cone', isCone], ['snowflake', isSnowflake], ['figurine', isFigurine]]
    const colorCheckboxes: Array<[string, React.MutableRefObject<HTMLInputElement | null>]> = [['white', isWhite], ['yellow', isYellow], ['red', isRed], ['blue', isBlue], ['green', isGreen]]
    const sizeCheckboxes: Array<[string, string, React.MutableRefObject<HTMLInputElement | null>]> = [['small', 'Маленький', isSmall], ['mid', 'Средний', isMid], ['big', 'Большой', isBig]]


    const checkboxShape = ['шар','колокольчик','шишка','снежинка','фигурка']
    const checkboxColor = ['белый','желтый','красный','синий','зелёный']
    const checkboxSize = ['малый','средний','большой']
    const checkboxRefNameArr = ['ball','bell','cone','snowflake','figurine','white','yellow','red','blue','green','small','mid','big','favorite']
    const checkboxRefs = [isBall,isBell,isCone,isSnowflake,isFigurine,isWhite,isYellow,isRed,isBlue,isGreen,isSmall,isMid,isBig,isFavorite]

    //тултипы для слайдера
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    //сохранение в localStorage всех state
    useEffect(() => {        	
        localStorage.setItem("cards", JSON.stringify(cards))
    })

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
        localStorage.setItem("toyCounter", String(toyCounter))
    }, [toyCounter])

    useEffect(() => {
        localStorage.setItem("favoriteToys", JSON.stringify(favoriteToys))
    })
    //сохранение в localStorage всех checkbox

    function getItemFromLocal (arr1: Array<React.MutableRefObject<HTMLInputElement | null>>, arr2: Array<string>) {
        for (let i = 0; i < arr1.length; i++) {
            if(arr1[i].current !== null) {
                arr1[i].current!.checked = JSON.parse(localStorage.getItem(arr2[i])!) || false
            } else {
                throw new Error('checkbox is null')
            }
        }
    }

    useEffect(() => {
        getItemFromLocal(checkboxRefs, checkboxRefNameArr)
    })
    
    useEffect(() => {
        props.setSelected(favoriteToys)
    }, [favoriteToys])

    function addCheckboxesToLocalStorage(arr1: Array<React.MutableRefObject<HTMLInputElement | null>>,arr2: Array<string>) {

        for(let i = 0; i < arr1.length; i++) {
            const value = arr1[i].current 
            localStorage.setItem(arr2[i], String(value === null ? console.log('null') : value.checked))
        }
    }
    
    
    //функция которая применяет все используемые фильтры
    function allFilters(val: React.FormEvent<HTMLInputElement> | Array<number> | React.FormEvent<Element>) {
        //объект в который передаются значения фильров
        const filters: Filters = {
            year1: sliderValues[0],
            year2: sliderValues[1],
            count1: sliderCount[0],
            count2: sliderCount[1],
            shapes: [],
            colors: [],
            sizes: [],
            name: title, 
        }
        //если функция вызывается на слайдере, то значения из слайдер устанавливаются в стейт
        //и передаются в объект фильтрации(filters)
        function setYearFilter (val: Array<number>) {
            setSliderYears(val)
            filters.year1 = val[0]
            filters.year2 = val[1]
        }
        //такой же принцип как у функции выше
        function setCountFilter (val: Array<number>) {
            setSliderCount(val)
            filters.count1 = val[0]
            filters.count2 = val[1]
        }

        function checkCheckboxesShape(refArr: Array<React.MutableRefObject<HTMLInputElement | null>>, filterArr: Array<string>) {
            let shapeCheckboxes = refArr.slice(0,5)
            for(let i = 0; i < shapeCheckboxes.length; i++) {
                let current = shapeCheckboxes[i].current
                let check = false
                current === null ? console.log('error') : check = current.checked
                if(check) {
                    filters.shapes.push(filterArr[i])
                }
            }
        }

        function checkCheckboxesColor(refArr: Array<React.MutableRefObject<HTMLInputElement | null>>, filterArr: Array<string>) {
            let colorCheckboxes = refArr.slice(5,10)
            for(let i = 0; i < colorCheckboxes.length; i++) {
                let current = colorCheckboxes[i].current
                let check: boolean = false
                current === null ? console.log('error') : check = current.checked
                if(check) {
                    filters.colors.push(filterArr[i])
                }
            }
        }

        function checkCheckboxesSize(refArr: Array<React.MutableRefObject<HTMLInputElement | null>>, filterArr: Array<string>) {
            let sizeCheckboxes = refArr.slice(10,13)
            for(let i = 0; i < sizeCheckboxes.length; i++) {
                let current = sizeCheckboxes[i].current
                let check: boolean = false
                current === null ? console.log('error') : check = current.checked
                if(check) {
                    filters.sizes.push(filterArr[i])
                }
            }
        }

        function filterAll(mainArr: Array<Data>) {
            let currentShape: Array<string> = []
            let currentColors: Array<string> = []
            let currentSize: Array<string> = []

            filters.shapes.length ? currentShape = filters.shapes : currentShape = checkboxShape
            filters.colors.length ? currentColors = filters.colors : currentColors = checkboxColor
            filters.sizes.length ? currentSize = filters.sizes : currentSize = checkboxSize

            function filterCurrentShape(arr: Data) {
                for(let i = 0; i < currentShape.length; i++) {
                    if(arr.shape === currentShape[i]) return true
                }
            }

            function filterCurrentColor(arr: Data) {
                for(let i = 0; i < currentColors.length; i++) {
                    if(arr.color === currentColors[i]) return true
                }
            }

            function filterCurrentSize(arr: Data) {
                for(let i = 0; i < currentSize.length; i++) {
                    if(arr.size === currentSize[i]) return true
                }
            }

            function filterByYear(arr: Data) {
                return (+arr.year >= filters.year1 && +arr.year <= filters.year2)
            }

            function filterByCount(arr: Data) {
                return (+arr.count >= filters.count1 && +arr.count <= filters.count2)
            }

            function filterFavorite(arr: Data) {
                return isFavorite.current?.checked ? arr.favorite : true
            }

            function filterInput(arr: Data) {
                return (filters.name === '') || (arr.name.toLowerCase().includes(filters.name.toLowerCase()))
            }

            setCards(mainArr.filter(item => filterCurrentShape(item))
                            .filter(item => filterCurrentColor(item))
                            .filter(item => filterCurrentSize(item))
                            .filter(item => filterByYear(item))
                            .filter(item => filterByCount(item))
                            .filter(item => filterFavorite(item))
                            .filter(item => filterInput(item)))
        }

        //эта функция обрабатывает все события на фильрах. Логика ниже помогает понять где происходит
        //событие и вызов функции. Эти события могут быть на слайдерах или инпуте фильтра.
        if (Array.isArray(val)) {
            val[1] < 1000 ? setCountFilter(val) : setYearFilter(val)
        } else if ((val.target as HTMLInputElement).type === 'text') {
            setTitle((val.target as HTMLInputElement).value)
            filters.name = (val.target as HTMLInputElement).value
        } else if ((val.target as HTMLInputElement).classList.value === 'cross') {
            filters.name = ''
        }

        addCheckboxesToLocalStorage(checkboxRefs,checkboxRefNameArr)
        checkCheckboxesShape(checkboxRefs,checkboxShape)
        checkCheckboxesColor(checkboxRefs,checkboxColor)
        checkCheckboxesSize(checkboxRefs,checkboxSize)
        sortLogic(data,selectedSort)
        filterAll(data)
        
    }

    function sortNames(arr: Array<Data>) {
        return arr.sort((a,b) => a.name.localeCompare(b.name))
    }
    function sortYears(arr: Array<Data>) {
        return arr.sort((a,b) => +a.year - +b.year)
    }
    function sortCount(arr: Array<Data>) {
        return arr.sort((a,b) => +a.count - +b.count)
    }
    //логика обычной сортировки без использования фильтров
    function sortLogic(arr: Array<Data>,sort: string) {
        switch(sort) {
            case 'title':
                setCards(sortNames(arr))
                break;
            case 'titleReverse':
                setCards(sortNames(arr).reverse())
                break;
            case 'number':
                setCards(sortCount(arr))
                break;
            case 'numberReverse':
                setCards(sortCount(arr).reverse())
                break;
            case 'year':
                setCards(sortYears(arr))
                break;
            case 'yearReverse':
                setCards(sortYears(arr).reverse())
                break
        }
    }

    //сортировка при выборе типа сортировки в селекте
    function sortCards(sort: React.FormEvent<Element>) {
        setSelectedSort((sort.target as HTMLSelectElement).value)
        sortLogic(cards,(sort.target as HTMLSelectElement).value)
    }

    //функция сброса всех фильров по клику на кнопку сброса
    function resetLocalStorage(arr: Array<string>) {
        for(let i = 0; i < arr.length; i++) {
            localStorage.setItem(arr[i], String(false))
        }
    }

    function resetFilters() {
        setCards(data)
        sortLogic(data,selectedSort)
        //пришлось дублировать с явным false, т.к. функция отображала не верное значение чекбокса
        //скорее всего связано с тем что я использовал кнопку резет для сброса чекбоксов
        resetLocalStorage(checkboxRefNameArr)
        setTitle('')
        setSliderYears([1940,2021])
        setSliderCount([1,12])
    }
    //функция очистки инпута по клику на крестик
    function inputClear(e: React.MouseEvent) {
        setTitle('')
        allFilters(e)
    }
    //Функция удаления данных из localStorage
    function clearLocalStorage () {
        localStorage.clear()
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
                onChange={e => sortCards(e)}
                />
            <form>
                <div className="shape-checkboxes">
                    <h2>Форма:</h2>
                    {shapeCheckboxes.map((shape, index) => <Checkbox id={shape[0]} class='custom-checkbox' refer={shape[1]} onClick={allFilters} key={index}/>)}
                </div>
                <div className="count-slider">
                    <h2>Количество экземпляров</h2>
                    {<Range className='count-slider' allowCross={false} min={1} max={12} defaultValue={sliderCount} step={1} onAfterChange={(value) => allFilters(value)}/>}
                </div>
                <div className="sliders">
                    <h2>Год приобретения</h2>
                    {<Range className='year-slider' allowCross={false} min={1940} max={2021} defaultValue={sliderValues} step={1} onAfterChange={(value) => allFilters(value)}/>}
                </div>
                <div className="color-checboxes">
                    <h2>Цвет:</h2>
                    {colorCheckboxes.map((color, index) => <Checkbox id={color[0]} class='custom-checkbox color' refer={color[1]} onClick={allFilters} key={index}/>)}
                </div>
                <div className="size-checkboxes">
                    <h2>Размер:</h2>
                    {sizeCheckboxes.map((size, index) => <Checkbox id={size[0]} class='custom-checkbox size' textContent={size[1]} refer={size[2]} onClick={allFilters} key={index}/>)}
                </div>
                <div className="favorite-checkbox">
                    <h2>Любимые:</h2>
                    <Checkbox id='favorite' class='custom-checkbox favorite' refer={isFavorite} onClick={allFilters}/>
                </div>
                <div className="buttons">
                    <button className='reset-button' type='reset' onClick={resetFilters}>Сброс фильтров</button>
                    <button className='reset-button reset-settings' type='button' onClick={clearLocalStorage}>Сброс настроек</button>
                </div>
            </form>
        </div>
        <Toys cards={cards} setToyCounter={setToyCounter} toyCounter={toyCounter} setFavoriteToys={setFavoriteToys} favoriteToys={favoriteToys}/>

    </section>
}