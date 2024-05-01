import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Books from "./pages/Books";
import Login from "./pages/Login";
import NewBook from "./pages/NewBook";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="add-book" element={<NewBook />} />
          <Route path="register" element={<Register />} />
          <Route path="books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
