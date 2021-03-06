import './App.css';
import {Nav} from "./components/nav";
import {SetupCards} from "./components/setup_cards";
import {DeliveryCalc} from "./components/delivery_calc";
import AdditionalOptions from "./components/additionalOptions"

function App() {
  return (
    <div className="App">
      {/*<Nav/>*/}
        <AdditionalOptions/>
    </div>
  );
}

export default App;