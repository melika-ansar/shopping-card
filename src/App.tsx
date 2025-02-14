import { createContext, useState } from 'react';
import HomePage from './pages/home/home'

export const shopContext = createContext(null);
function App() {
  const [cart, setCart]= useState([])

  return (
    <shopContext.Provider value={{cart,setCart}}>
      <HomePage />
    </shopContext.Provider>
  );
}

export default App
