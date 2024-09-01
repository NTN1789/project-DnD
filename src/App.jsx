
import './App.css'

import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ClassList from "./pages/ClassList/ClassList";  
import ClassDetails from "./pages/ClassDetails/ClassDetails";
import MonsterList from "./pages/MonsterList/MonsterList";
import MonsterDetails from "./pages/MonsterDetails/MonsterDetails";
import SpellSearch from "./pages/SpellSearch/SpellSearch";
import SpellDetails from "./pages/SpellDetails/SpellDetails";
import SpellList from './pages/SpellList/SpellList';
import Home from './pages/Home/Home';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/", name:"Home"},
    {url: "/class-list", name: "Class List"}, 
    {url: "/monster-list", name: "Monsters List"}, 
    {url: "/spell-search", name: "Search  Spells"},
    {url:  "/spell", name: "Spell List" }
  ])
  return (
    <>
 <Navbar navItems={navItems} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/class-list' element={<ClassList />} />
        <Route path='/class' element={<ClassDetails />} />
        <Route path='/monster-list' element={<MonsterList />} />
        <Route path='/monster' element={<MonsterDetails />} />
        <Route path='/spell' element = {<SpellList/>}/>
        <Route path='/spell-search' element={<SpellSearch />} />
        <Route path='/spell/:spellName' element={<SpellDetails />} />
        <Route path='/spell/spellDetails' element={<SpellDetails />} />
        
      </Routes>
    </>
  )
}

export default App
