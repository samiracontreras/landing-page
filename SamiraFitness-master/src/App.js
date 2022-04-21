import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Programas } from "./components/Programas";
import { Main } from "./components/Main"
import { NavBar } from './components/NavBar';
import { CartProvider } from './context/CartContext'
import InfoPrograma from './components/InfoPrograma';
import Carrito from './components/Carrito';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route path="" element={<Main />} />
                <Route path="SamiraFitness" element={<Main />} />
                <Route path="programas" element={<Programas />} />
                <Route path=":tipo/:programa" element={<InfoPrograma />} />
                <Route path="cart" element={<Carrito />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </CartProvider>
  );
}

export default App;
