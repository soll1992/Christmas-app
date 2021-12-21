import './App.scss';
import {
    HashRouter as BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import { Pages } from '../pages/Router'

function App() {
  return <BrowserRouter>
      <Routes>
      {Pages.map((page, index) => <Route path={page.link} element={page.component} key={index} />)}
    </Routes>
  </BrowserRouter>
}

export default App;
