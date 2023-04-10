import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { createContext, useState } from 'react';
import CategoryButton from './Components/CategoryButton';
import Footer from './Components/Footer';
export const myContext=createContext();

function App() {
  const [category, setCategory]=useState('lunch');

  return (
    <myContext.Provider value={[category,setCategory]}>
    <Nav />
    <Header/>
    <CategoryButton/>
    <Main />
    <Footer/>
    </myContext.Provider>
  );
}

export default App;
