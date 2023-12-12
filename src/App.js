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
import { SignUp } from './SignUp/SignUp';
import { NextStep } from './SignUp/NextStep';
import { SignUpExplore } from './SignUp/SignUpExplore';
import { AccountSetUp } from './SignUp/AccountSetUp';
import { Login } from './LogIn/Login';

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
          <Route path='/signup' element={<SignUp />} />
          <Route path='/nextstep' element={<NextStep />} />
          <Route path='/nextstepexplore' element={<SignUpExplore />} />
          <Route path='/accountsetup' element={<AccountSetUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default (App);
