import React, {useState, useRef, useEffect} from 'react'
import './tree.scss';
import data from '../../data';
import Button from '../Components/button/button'
import TreeCard from '../Components/tree-card/tree-card';
import BgCard from '../Components/bg-card/bg-card';
import LightBtn from '../Components/light-btns/light-btn';
import Snowfall from 'react-snowfall'
import Garland from '../Components/garland/garland';
import SelectedToyCard  from '../Components/selected-toy-card/selected-toy-card';
import { NavLink } from '../Components/nav-link/nav-link'

export function Tree({audio, selectedToysArr}) {

    const trees = [1,2,3,4,5,6]
    const bgs = [1,2,3,4,5,6,7,8,9,10]
    const lightBtns = ['multicolor', 'red', 'blue', 'yellow', 'green']
    let lightsKey = 0
    const [bgNum, setBgNum] = useState(1);
    const [treeNum, setTreeNum] = useState(1);
    const [isLight, setIsLight] = useState(false);
    const [currentColor, setCurrentColor] = useState('');
    const defaultToys = data.filter(item => item.num < 21)
    const [currentToys, setCurrentToys] = useState([]);
    let background = `bg/${bgNum}.jpg`
    let tree = `tree/${treeNum}.png`
    const [isSnow, setIsSnow] = useState(false);
    const startWidth = 120;

    const isTree = useRef()

    let refArr = []

    useEffect(() => {
        setCurrentToys(data.filter(item => selectedToysArr.includes(item.num)))
    }, [selectedToysArr])
    

    function toggle() {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    function changeBg(e) {
        setBgNum(e.currentTarget.dataset.bgNum)
    }

    function changeTree(e) {
        setTreeNum(e.currentTarget.dataset.treeNum)
    }
    
    function garlandColor(e) {
        setCurrentColor(e.currentTarget.id)
        if(e.currentTarget.id === currentColor && isLight) {
            setIsLight(false)
        } else {
            setIsLight(true)
        }

    }

    let test1 = false

    //drug and drop
    function handleDragStart(e) {
        test1 = false
        if (!e.target.classList.contains('.on-tree')) {
            //вынести в отдельную функцию
            refArr.filter(item => 
                item.dataset.pNum === e.target.dataset.num)[0]
                .textContent--
        }

        e.dataTransfer.setData("text", e.target.id);
    }

    function handleOverDrop(e) {
        e.preventDefault(); 

        let draggedId = e.dataTransfer.getData("text");
        let draggedEl = document.getElementById(draggedId); //заменить на ссылку

        if (e.type !== "drop") {
            return; 
        } else {
            test1 = true 
            draggedEl.classList.add('.on-tree')      
        } 


        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            draggedEl.style.left = pageX - 32 + 'px';
            draggedEl.style.top = pageY- 32 + 'px';
        }


    }

    function dragEnd(e) {
        if(!test1) {
            e.target.style.left = 'auto';
            e.target.style.top = 'auto';
            e.target.classList.remove('.on-tree')
            console.log(refArr)
            //вынести в отдельную функцию
            refArr.filter(item => 
                item.dataset.pNum === e.target.dataset.num)[0]
                .textContent++
        }

    }

    return <section className="tree" onDragEnd={e => dragEnd(e)}>
        <div className="left-panel panel">
            <div className="nav">
                <NavLink class={'nav-link__link home-link'} link={'/'}/>
                <NavLink class={'nav-link__link toy-link'} link={'/content'}/> 
            </div>
            <div className="effects">
                <Button class={'music button'} onClick={toggle}/>
                <Button class={'snow button'} onClick={e => setIsSnow(!isSnow)}/>
            </div>
            <h2>Выберите ёлку</h2>
            <div className="trees">
                {trees.map(item => <TreeCard treeClass={item} key={item} onClick={e => changeTree(e)}/>)}
            </div>
            <h2>Выберите фон</h2>
            <div className='bgs'>
                {bgs.map(item => <BgCard bgClass={item} key={item} onClick={e => changeBg(e)}/>)}
            </div>
            <h2>Гирлянда</h2>
            <div className='lights'>
                {lightBtns.map(item => 
                    <LightBtn   
                        bgClass={item} 
                        key={lightsKey++} 
                        bgId={item} 
                        onClick={ e => garlandColor(e)}
                    />
                )}
            </div>
        </div>
        <div className="main-content" style={{ backgroundImage: `url(${background})` }}>
            <div className="main-tree">
                {isSnow && <Snowfall/>}

                <div className={ isLight ? 'garland-tree-container' : 'hidden'}>
                    {[...Array(12)].map((_, i) => {
                        return (
                            <Garland
                                color={currentColor}
                                width={startWidth + i * 50}
                                amount={i + 5}
                                key={i}
                            />
                        );
                    })}
                </div>

                <img className='tree-img' src={tree} alt="tree" useMap="#image-map"/>

                <map name="image-map"                      
                    onDrop={e => handleOverDrop(e)}
                    onDragOver={e => handleOverDrop(e)}
                    >
                    
                    <area data-drop-target="true"
                        ref={isTree} 
                        alt="garland" 
                        coords="118,690,69,648,31,609,4,560,21,437,76,355,109,228,160,136,250,1,305,69,353,152,398,228,394,287,425,357,456,454,490,547,443,665,357,695,259,702,198,706" shape="poly"/>
                </map>
            </div>
        </div>
        <div className="right-panel panel">
            <h2>Игрушки</h2>
            <div className="toys-mini-cards" 
                data-drop-target="true">
                {selectedToysArr.length ? 
                    currentToys.map((item,i) => <SelectedToyCard refArr={refArr} onDragStart={e=>handleDragStart(e)} dataArr={item} key={i}/>) :
                    defaultToys.map((item,i) => <SelectedToyCard refArr={refArr} onDragStart={e=>handleDragStart(e)} dataArr={item} key={i}/>)
                }
            </div>
        </div>
    </section>
}
