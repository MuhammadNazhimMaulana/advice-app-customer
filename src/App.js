import Home from './pages/Home';
import Form from './pages/Form';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form/:id" element={<Form />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
