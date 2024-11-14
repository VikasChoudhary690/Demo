import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Food from './Food';
import { Todolist} from './Todolist';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
                          <Routes>
                                   <Route path="/" element={<Search/>} />
                                   <Route path="/Food/:id" element={<Food/>} />
                                   <Route path="/Todolist" element={<Todolist/>} />
                          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
