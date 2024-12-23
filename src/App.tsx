import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { RouterController } from './routerController/RouterController';
import { ChakraProvider } from '@chakra-ui/react';
import { DataContext } from './context/useContext';
import { useState } from 'react';
import { Assessment } from './types/Assessment';

function App() {

  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [evaluacion, setEvaluacion] = useState<Assessment>({ puntuacion: 0, evaluacion: [] });

  return (
    <ChakraProvider>
      <DataContext.Provider value={{ numberQuestion, setNumberQuestion, evaluacion, setEvaluacion }}>
        <BrowserRouter>
          <RouterController>
          </RouterController>
        </BrowserRouter>
      </DataContext.Provider>
    </ChakraProvider >
  )
}

export default App
