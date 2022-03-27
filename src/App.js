import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Room from './pages/Room';
import Home from './pages/Home';
import System from './pages/System';
import Register from './pages/Register';
import Conference from './pages/Conference'
import CreateConference from './pages/CreateConference'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<Room />} />
        <Route path='/createConference' element={<CreateConference />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/system' element={<System />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
