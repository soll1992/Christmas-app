import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(`Все требования к заданию я выполнил. Фильтры работают и работают синхронно. Данные сохраняются в localStorage, кнопка "Сброс настроек". 
Активные игрушки выделяются золотой рамкой. Ховеры и анимации почти везде. Есть кнопка резет, которая сбрасывает фильтры, но не сортировку.
Если нажать на ёлку будет переход на страницу, но там ничего нет. Будет в christmas-task-part-2.
Если у вас что-то не работает напишите мне в дискорд(Антон92#7138). Я постараюсь быстро все поправить. От багов никто не застрахован.`)

reportWebVitals();
