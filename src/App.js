import './App.css';
import NavBar from './components/NavBar';
import {Route , Switch} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portifolio from './pages/Portifolio';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' exact>
            <Home/>
        </Route>
        <Route path='/contact' >
            <Contact/>
        </Route>
        <Route path='/portfolio' >
            <Portifolio/>
        </Route>
      </Switch>
    </div>


  );
}

export default App;
