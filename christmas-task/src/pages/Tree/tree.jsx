import React, {useState, useRef, useEffect} from 'react'
import './tree.scss';
import Button from '../Components/button/button'
import TreeCard from '../Components/tree-card/tree-card';
import BgCard from '../Components/bg-card/bg-card';
import LightBtn from '../Components/light-btns/light-btn';
import Snowfall from 'react-snowfall'
import { NavLink } from '../Components/nav-link/nav-link'

export function Tree(props) {

    const trees = [1,2,3,4,5,6]
    const bgs = [1,2,3,4,5,6,7,8,9,10]
    const lightBtns = ['rainbow', 'red', 'blue', 'yellow', 'green']
    let lightsKey = 0
    const [bgNum, setBgNum] = useState(1);
    const [treeNum, setTreeNum] = useState(1);
    let background = `bg/${bgNum}.jpg`
    let tree = `tree/${treeNum}.png`
    const [isSnow, setIsSnow] = useState(false);


    function toggle() {
        if (props.audio.paused) {
            props.audio.play()
        } else {
            props.audio.pause()
        }
    }
    function changeBg(e) {
        setBgNum(e.currentTarget.dataset.bgNum)
    }

    function changeTree(e) {
        setTreeNum(e.currentTarget.dataset.treeNum)
    }
    

    return <section className="tree">
        <div className="left-panel panel">
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
                {lightBtns.map(item => <LightBtn bgClass={item} key={lightsKey++}/>)}
            </div>
        </div>
        <div className="main-content" style={{ backgroundImage: `url(${background})` }}>
            <div className="main-tree">
                {isSnow && <Snowfall/>}

                <img className='tree-img' src={tree} alt="tree" useMap="#image-map"/>

                <map name="image-map">
                    <area alt="garland" coords="118,690,69,648,31,609,4,560,21,437,76,355,109,228,160,136,250,1,305,69,353,152,398,228,394,287,425,357,456,454,490,547,443,665,357,695,259,702,198,706" shape="poly"/>
                </map>
            </div>
        </div>
        <div className="right-panel panel">

        </div>
    </section>
}