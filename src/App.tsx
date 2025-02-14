import { createContext } from 'react';
import HomePage from './pages/home/home'

export const shopContext = createContext(null);
function App() {

  return (
    <shopContext.Provider value={}>
      <HomePage />
    </shopContext.Provider>
  );
}

export default App
