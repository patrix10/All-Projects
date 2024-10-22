import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Prices from './Components/Prices';
import Shop from './Components/Shop';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Prices/>
    </div>
  );
}

export default App;
