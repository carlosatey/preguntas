import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Evaluacion } from '../pages/Evaluacion';
import { DataContext } from '../context/useContext';
import { useContext } from 'react';

const RouterController = () => {
  const {evaluacion} = useContext(DataContext);

    return (
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/evaluacion" element={ evaluacion?.evaluacion?.length  ? <Evaluacion/> : <Navigate to="/" replace={true} />}/>
          </Route>
        </Routes>
    )
}

export {RouterController}