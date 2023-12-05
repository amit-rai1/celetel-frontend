import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { MainSms } from './MainSmsSolutionsPage/MainSms';
import { MainVoice } from './MainVoicePage/MainVoice';
import { MainWhatsapp } from './MainWhatsappPage/MainWhatsapp';
import { MainRCS } from './MainCommRCS/MainRCS';
import { Contact } from './Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Mainverify } from './MainVerificationPage/MainVerify';


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
          <Route path='/contact' element={<Contact />} />
          <Route path='/verifications' element={<Mainverify />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
