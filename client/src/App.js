import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import ListProducts from './components/ListProducts';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
            <Create />
            <ListProducts />
          </div>
        } />
        <Route path="/:id" element={
          <Details />
        } />
        <Route path='/:id/edit' element={
          <Edit />
        } />
      </Routes>
    </div>
  );
}

export default App;