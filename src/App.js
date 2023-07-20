import './App.css';
import './main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Cabeçalho/header';
import Principal from './Componentes/Principal/Principal';
import About from './Componentes/Sobre/About';
import Footer from './Componentes/Rodapé/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                
                <Header />

                <Routes>
                    <Route exact path='/' element={<Principal />} />
                    <Route path='/Sobre' element={<About />} />
                </Routes>

                <Footer />

            </Router>
        </div>
    );
}

export default App;
