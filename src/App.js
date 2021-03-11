import './App.css';
import {VideoWatchingPage} from "./pages/videowatching_systems_page";

import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/reducer";


let store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <VideoWatchingPage/>
          </div>
      </Provider>
  );
}

export default App;