import './App.css';
import {React} from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Verify from './_webapp/Verify/verify';
import Cssloader from './_common/cssloader';

function App() {
  return (
    <div className="App">
      <Cssloader/>
      <BrowserRouter>
        <Routes>
          <Route path={"/verify"} element={<Verify/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
