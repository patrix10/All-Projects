/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Eight from './Eight';
import Eleven from './Eleven';
import Five from './Five';
import Four from './Four';
import Nine from './Nine';
import One from './One';
import Seven from './Seven';
import Six from './Six';
import Ten from './Ten';
import Three from './Three';
import Two from './Two';
import Twelve from './Twelve'
import TwentyOne from './TwentyOne'
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Nineteen from './Nineteen';
import NineteenComp from './NineteenComp';
import { ThemeProvider } from './ThemeContext';
import TwentyTwo from './TwentyTwo';
import TwentyThree from './TwentyThree';
import TwentyFour from './TwentyFour';
import Twenty from './Twenty';
import { CartProvider } from './CartContext';

function App() {

  const items = ['item 1','item 2','item 3','another item','another item 2']

  return (
    <div className='App'>
       <One/>
       <Two/>
       <Three/>
       <Four/>
       <Five/>
       <Six/>
       <Seven/>
       <Eight/>
       <Nine/>
       <Ten/>
       <Eleven/>
       <Twelve/>
       <Thirteen/>
       <Fourteen/>
       <Fifteen items={items}/>
       <Sixteen items={items} itemsPerPage={2}/>
       <Seventeen/>
       <Eighteen/>
       <ThemeProvider>
       <Nineteen/>
       <NineteenComp/>
       </ThemeProvider>
       <CartProvider>
       <Twenty/>
       </CartProvider>
       <TwentyOne/>
       <TwentyTwo/>
       <TwentyThree/>
       <TwentyFour/>
    </div>
  );
}

export default App;