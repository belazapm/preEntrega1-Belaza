import { useState } from 'react'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import './style.css'; 

function App() {
  const [count, setCount] = useState(0)


    return (
      <div className="App">
        <NavBar />
        <ItemListContainer saludo="¡Bienvenido a la tienda más exclusiva de NFT's!" />
      </div>
    );
  }
  
  export default App;
  