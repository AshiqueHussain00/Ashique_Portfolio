import  { Suspense, lazy } from 'react';
import './index.css'
import './App.css';
import { Routes, Route} from 'react-router-dom'; // React Router v6 imports
import Loader from './component/common/Loader';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';

AOS.init(); // Initialize AOS

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Certificate = lazy(() => import('./pages/Certificate'));

function App() {
  return (
    <div>
        <Navbar className="z-50"/>
    
      {/* Use Suspense to wrap lazy-loaded components */}
      <Suspense fallback={<Loader />}>
    
        <Routes className=" -z-20">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificate" element={<Certificate />} />

        </Routes>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
