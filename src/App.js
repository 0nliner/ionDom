import './App.css';
import {Nav} from "./components/nav";
import {SetupCards} from "./components/setup_cards";
import {DeliveryCalc} from "./components/delivery_calc";

function App() {
  return (
    <div className="App">
      {/*<Nav/>*/}
        <DeliveryCalc/>
    </div>
  );
}

export default App;
