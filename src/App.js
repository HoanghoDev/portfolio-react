import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import { connect } from 'react-redux'
import { changeTabActive } from './redux/actions' 
import Projects from './components/Projects'
import Contacts from './components/Contacts'


function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
