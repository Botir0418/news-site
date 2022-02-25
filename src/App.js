import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import GetNews from './pages/GetNews';

function App() {
  return (
    <> 
     <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/news" element={<GetNews />}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
