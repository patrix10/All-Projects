import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Toast from './Components/Toast';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Card/>
     <div>
     <Toast/>
     </div>
    </div>
  );
}

export default App;
