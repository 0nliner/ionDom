import './App.css';
import {Nav} from "./components/nav";
import {SetupCards} from "./components/setup_cards";
import {DeliveryCalc} from "./components/delivery_calc";
import ItemsBlock from "./components/itemCard"

function App() {
  return (
    <div className="App">
      {/*<Nav/>*/}
        <ItemsBlock/>
    </div>
  );
}

export default App;