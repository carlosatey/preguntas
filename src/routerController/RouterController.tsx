import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

const RouterController = () => {
    return (
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
    )
}

export {RouterController}