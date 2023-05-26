import Home from './pages/Home';
import Form from './pages/Form';
import Thanks from './pages/Thanks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/form/:id" element={<Form />}></Route>
        </Routes>
        <Routes>
          <Route path="/thanks" element={<Thanks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
