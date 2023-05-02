import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Nav from "./Nav";
import Header from "./Header";
import CategoryButton from "./CategoryButton";
import Main from "./Main";
import Service from "./Service";
import Footer from "./Footer";
import { createContext, useState } from "react";
export const myContext = createContext();

export default function Home() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState("lunch");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
    } else {
      // User is signed out
      navigate("/signin");
    }
  });
  return (
    <myContext.Provider value={[category, setCategory]}>
      <Nav />
      <Header />
      <CategoryButton />
      <Main />
      <Service />
      <Footer />
    </myContext.Provider>
  );
}
