import './App.css';
import HomePage from './routes/Home/home.component';
import { Routes, Route } from 'react-router-dom';
import ServicePage from './routes/service-page/service-page.component';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<HomePage />} />
          <Route path='/service/*' element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
