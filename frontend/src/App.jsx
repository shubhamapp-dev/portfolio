import './App.css';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom";
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/blogs" element={<BlogPage />}/>
        <Route path="/work" element={<WorkPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/skills" element={<SkillPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </>
  )
}

export default App
