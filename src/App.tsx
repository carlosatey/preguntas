import './App.css'
import { BrowserRouter} from 'react-router-dom';
import { RouterController } from './routerController/RouterController';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <RouterController>
        </RouterController>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
