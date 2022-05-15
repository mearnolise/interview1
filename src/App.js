
import Navbar from './components/Navbar';
import Body from './components/Body';
import {ToggleProvider} from "./context/ToggleContext";
import {SelectProvider} from "./context/SelectContext";
import "./App.css"

function App() {

  return (
    <SelectProvider>
    <ToggleProvider>
    <div className='all-body'>
    <Navbar/>
    <Body />
    </div>
   
    
    </ToggleProvider>
    </SelectProvider>
  
  );
  
}
export default App;
