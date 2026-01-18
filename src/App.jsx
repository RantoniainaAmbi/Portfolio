import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  return (
<Routes>
  <Route element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="/Home" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Project" element={<Project />} />
  </Route>
</Routes>
  );
}

export default App;