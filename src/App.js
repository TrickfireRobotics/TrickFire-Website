import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AboutUs } from './pages/AboutUs/AboutUs'
import { Events } from './pages/Events/Events';
import { GetInvolved } from './pages/GetInvolved/GetInvolved';
import { Homepage } from './pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element = {<Homepage/>}/>
          <Route path="/about-us" element = {<AboutUs/>}/>
          <Route path="/get-involved" element={<GetInvolved/>}/>
          <Route path="/events" element={<Events/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
