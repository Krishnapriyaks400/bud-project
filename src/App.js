import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
