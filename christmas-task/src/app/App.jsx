import './App.scss';
import { useState } from 'react';
import { Home } from '../pages/Home/home'
import { Content } from '../pages/Content/content'
import { Tree } from '../pages/Tree/tree'
import {
    HashRouter as BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

function App() {
  const [selectedToysArr, setSelectedToysArr] = useState(() => {
    const saved = localStorage.getItem("selectedToysArr");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
}); 

  const [audio] = useState(new Audio('audio/audio.mp3'));
  return <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/content' element={<Content selectedToysArr={selectedToysArr} setSelected={setSelectedToysArr}/>} />
      <Route path='/tree' element={<Tree audio={audio} selectedToysArr={selectedToysArr}/>} />
    </Routes>
  </BrowserRouter>
}

export default App;
