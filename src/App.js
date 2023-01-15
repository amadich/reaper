import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import BackgroundVideo from './components/BackVideo.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Aside from './components/aside.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import './styles/main.css';
function App() {
  return (
    <div className='myApp'>
       
       
        
      <Router>
          <BackgroundVideo />
          <Header />
          <Nav />
          <Aside />
          <Routes>
                <Route path='/'  element={ <Article /> }/>
                <Route path='about'  element={ <About /> }/>
                <Route path='contact'  element={ <Contact /> }/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
