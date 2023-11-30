import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { MainSms } from './MainSmsSolutionsPage/MainSms';
import { MainVoice } from './MainVoicePage/MainVoice';
import { MainWhatsapp } from './MainWhatsappPage/MainWhatsapp';
import { MainRCS } from './MainCommRCS/MainRCS';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import Signup from './features/Signup';
import AccountSetup from './features/AccountSetup';
import Login from './features/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/smssolutions' element={<MainSms />} />
          <Route path='/voicesolutions' element={<MainVoice />} />
          <Route path='/connectwhatsapp' element={<MainWhatsapp />} />
          <Route path='/connectrcs' element={<MainRCS />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/accountsetup' element={<AccountSetup />} />
          <Route path='/login' element={<Login />} />


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
