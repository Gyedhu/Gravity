import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { Loading, Notification } from './components';
import { auth } from "firebase";

function App() {

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        alert("user available");
      } else {
        // alert("no user");
      }
    })
  }, []);

  return (
    <>
      <Loading />
      <Notification />
      <Router />
    </>
  );
}

export default App;
