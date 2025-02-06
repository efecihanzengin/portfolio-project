import './App.css';
import './global.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ModeComponent from './components/ModeComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <LanguageProvider>
        <ToastContainer />
        <Header />
        <ModeComponent /> {/* Eğer kullanmak istemiyorsan bu satırı kaldır */}
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;