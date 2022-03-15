import React from 'react'
import { BallCard } from '../../Components/ball-card/ball-card'
import { Data } from '../../interfaces'

interface Props {
    cards: Array<Data>,
    setToyCounter: React.Dispatch<React.SetStateAction<number>>,
    setFavoriteToys: React.Dispatch<React.SetStateAction<string[]>>,
    favoriteToys: string[],
    toyCounter: number,
}

export default function Toys(props: Props) {
        //функция добавляет номер активной карточки в массив
        function addActiveCardsNumInArr(e: React.MouseEvent<Element>) {
            const index = props.favoriteToys.indexOf(((e.currentTarget as HTMLElement).dataset.num as string))
            if (index !== -1) {
                props.setFavoriteToys(props.favoriteToys.filter(item => item !== (e.currentTarget as HTMLElement).dataset.num))
            } else {
                props.favoriteToys.push(((e.currentTarget as HTMLElement).dataset.num as string))
            }
        }
        //активирует или деактивирует карточку по клику, увеличивает или уменьшает счетчик игрушек
        function cardActivator(e: React.MouseEvent<Element>) {
            if(e.currentTarget.classList.contains('active')) {
                e.currentTarget.classList.remove('active')
                addActiveCardsNumInArr(e)
                props.setToyCounter(props.toyCounter - 1)
            } else if (!e.currentTarget.classList.contains('active') && props.toyCounter < 20) {
                e.currentTarget.classList.add('active')
                addActiveCardsNumInArr(e)
                props.setToyCounter(props.toyCounter + 1)
            } else if (props.toyCounter === 20) {
                alert("Извините, все слоты для игрушек заполнены")
            }
        }
    return (
        <div className="toys">
            <h2 className="content-title">Игрушки</h2>
            <div className='cards'>
                    {props.cards.length ? props.cards.map(card => <BallCard data={card} key={+card.num} favorite={props.favoriteToys} onClick={e => cardActivator(e)}/> )
                                    : <h2>Ничего не найдено</h2>
                    }
            </div>
        </div>
    )
}
