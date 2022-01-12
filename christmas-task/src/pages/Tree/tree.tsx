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
import { Data } from '../interfaces'


export function Tree({audio, selectedToysArr}: {audio: HTMLAudioElement, selectedToysArr: Array<string>}) {

    const trees = [1,2,3,4,5,6]
    const bgs = [1,2,3,4,5,6,7,8,9,10]
    const lightBtns = ['multicolor', 'red', 'blue', 'yellow', 'green']
    let lightsKey = 0
    const [bgNum, setBgNum] = useState(() => {
        const initialValue = localStorage.getItem("bgNum")!;
        return +initialValue || 1;
    });
    const [treeNum, setTreeNum] = useState(() => {
        const initialValue = localStorage.getItem("treeNum")!;
        return +initialValue || 1;
    });
    const [isLight, setIsLight] = useState(false);
    const [currentColor, setCurrentColor] = useState('');
    const defaultToys = data.filter(item => +item.num < 21)
    const [currentToys, setCurrentToys] = useState<Array<Data>>([]);
    const [audioFlag, setAudioFlag] = useState(() => {
        const initialValue = localStorage.getItem("audioFlag");
        return initialValue || 'on';
    });
    const [firstClick, setFirstClick] = useState(true);
    let background = `bg/${bgNum}.jpg`
    let tree = `tree/${treeNum}.png`
    const [isSnow, setIsSnow] = useState(() => {
        const saved = localStorage.getItem("isSnow");
        if(saved !== null && saved !== undefined) {
            const initialValue = JSON.parse(saved);
            return initialValue        
        } else {
            return false
        }
    });
    const startWidth = 120;

    const isTree: React.MutableRefObject<HTMLAreaElement | null> = useRef(null)
    const mainConteiner: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

    let refArr: Array<HTMLParagraphElement> = []
    let refArrCards: Array<HTMLDivElement> = []

    useEffect(() => {
        localStorage.setItem("bgNum", String(bgNum))
    }, [bgNum])

    useEffect(() => {
        localStorage.setItem("audioFlag", audioFlag)
    }, [audioFlag])

    useEffect(() => {
        localStorage.setItem("treeNum", String(treeNum))
    }, [treeNum])

    useEffect(() => {
        localStorage.setItem("isSnow", JSON.stringify(isSnow))
    }, [isSnow])

    useEffect(() => {
        setCurrentToys(data.filter(item => selectedToysArr.includes(item.num)))
    }, [selectedToysArr])
    

    function toggle() {
        if (audio.paused) {
            audio.play()
            setAudioFlag('off')
        } else {
            audio.pause()
        }
    }

    function playAudio() {
        if (audioFlag === 'off' && firstClick) {
            audio.play()
            setAudioFlag('on')
        }  
        setFirstClick(false)
    }

    function changeBg(e: React.MouseEvent) {
        setBgNum(Number((e.currentTarget as HTMLDivElement).dataset.bgNum))
    }

    function changeTree(e: React.MouseEvent) {
        setTreeNum(Number((e.currentTarget as HTMLElement).dataset.treeNum))
    }
    
    function garlandColor(e: React.MouseEvent) {
        setCurrentColor(e.currentTarget.id)
        if(e.currentTarget.id === currentColor && isLight) {
            setIsLight(false)
        } else {
            setIsLight(true)
        }

    }

    //drug and drop
    let onTree = false
    let draggedEl: HTMLElement | null = null


    function handleDragStart(e: React.DragEvent) {
        onTree = false
        if (!(e.target as HTMLElement).classList.contains('on-tree')) {
            //вынести в отдельную функцию
            let currentToyNumber = refArr.filter(item => 
                item.dataset.pNum === (e.target as HTMLElement).dataset.num)[0]
            currentToyNumber.textContent = String(Number(currentToyNumber.textContent) - 1)
        }
        draggedEl = e.target as HTMLElement
    }

    function handleOverDrop(e: React.DragEvent) {
        e.preventDefault(); 

        if (e.type !== "drop") {
            return; 
        } else {
            onTree = true 
            draggedEl?.classList.add('on-tree')      
        } 


        moveAt(e.pageX, e.pageY)


        function moveAt(pageX: number, pageY: number) {
            if(draggedEl !== null && mainConteiner.current !== null) {
                draggedEl.style.left = pageX - mainConteiner.current.getBoundingClientRect().left - 32 + 'px';
                draggedEl.style.top = pageY- mainConteiner.current.getBoundingClientRect().top - window.scrollY - 32 + 'px';
            }
        }

        if(draggedEl !== null) {
            draggedEl.parentNode?.removeChild(draggedEl);
            (e.target as HTMLElement).appendChild(draggedEl);
        }

    

    }

    function dragEnd(e: React.DragEvent) {
        if(!onTree) {
            (e.target as HTMLElement).parentNode?.removeChild(e.target as HTMLElement);
            refArrCards.filter( item =>
                item.dataset.cardNum === (e.target as HTMLElement).dataset.num)[0]
                .appendChild(e.target as HTMLElement);
            (e.target as HTMLElement).style.left = 'auto';
            (e.target as HTMLElement).style.top = 'auto';
            (e.target as HTMLElement).classList.remove('on-tree');
            //вынести в отдельную функцию
            let currentToyNumber = refArr.filter(item => 
                item.dataset.pNum === (e.target as HTMLElement).dataset.num)[0]
            currentToyNumber.textContent = String(Number(currentToyNumber.textContent) + 1)
        }

    }

    function removeToysFormTree() {
        if(isTree.current !== null) {
            let nodes = [...isTree.current.childNodes]
            nodes.forEach(item => {
                isTree.current?.removeChild(item)
                refArrCards.filter( card =>
                    card.dataset.cardNum === (item as HTMLElement).dataset.num)[0]
                    .appendChild(item);
                (item as HTMLElement).style.left = 'auto';
                (item as HTMLElement).style.top = 'auto';
                (item as HTMLElement).classList.remove('on-tree');
                //вынести в отдельную функцию
                let currentToyNumber = refArr.filter(p => 
                    p.dataset.pNum === (item as HTMLElement).dataset.num)[0]
                currentToyNumber.textContent = String(Number(currentToyNumber.textContent) + 1)
            })
        }
    }
    //Сброс настроек

    function resetSettings(e: React.MouseEvent) {
        localStorage.clear()
        setBgNum(1)
        setTreeNum(1)
        setIsSnow(false)
        removeToysFormTree()
        setCurrentToys(defaultToys)
    }

    return <section className="tree" onDragEnd={e => dragEnd(e)} onClick={playAudio}>
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
            {isSnow && <Snowfall/>}
            <div ref={mainConteiner} className="main-tree">
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
                        alt="tree" 
                        coords="118,690,69,648,31,609,4,560,21,437,76,355,109,228,160,136,250,1,305,69,353,152,398,228,394,287,425,357,456,454,490,547,443,665,357,695,259,702,198,706" shape="poly"/>
                </map>
            </div>
        </div>
        <div className="right-panel panel">
            <h2>Игрушки</h2>
            <div className="toys-mini-cards" 
                data-drop-target="true">
                {selectedToysArr.length ? 
                    currentToys.map((item,i) => <SelectedToyCard refArrCards={refArrCards} refArr={refArr} onDragStart={e=>handleDragStart(e)} dataArr={item} key={i}/>) :
                    defaultToys.map((item,i) => <SelectedToyCard refArrCards={refArrCards} refArr={refArr} onDragStart={e=>handleDragStart(e)} dataArr={item} key={i}/>)
                }
            </div>
            <div className="button-conteiner">
                <Button class={'reset-settings'} content={'Сброс настроек'} onClick={resetSettings}/>
            </div>
        </div>
    </section>
}
