import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { Loading, Notification } from './components';
import { auth, database } from "firebase";
import { connect } from 'react-redux';
import { setUserData, setLoading, setNotification } from './Redux/actions';


const mapDispatchToProps = dispatch => ({
  setUserData: (uid, name, email, url, profession, stars) => dispatch(setUserData({ uid, name, email, url, profession, stars })),
  setLoading: message => dispatch(setLoading(message)),
  setNotification: message => dispatch(setNotification(message))
});

function App({ setUserData, setLoading, setNotification }) {


  useEffect(() => {

    const getUserInfo = async (uid) => {
      const infoRef = database().ref("users/info/" + uid);
      setLoading("Fetching user info");

      try {
        const info = await infoRef.once("value");
        const { name, email, profession, profileImage, stars } = info.val();
        setUserData(uid, name, email, profileImage, profession, stars);
      }
      catch (error) {
        setNotification("Error while fetching data");
      }
      finally {
        setLoading("");
      }
    }

    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        const { uid } = user;
        getUserInfo(uid);
      }
    });

    return () => unsubscribe();
  }, [setLoading, setNotification, setUserData]);

  return (
    <>
      <Loading />
      <Notification />
      <Router />
    </>
  );
}

export default connect(null, mapDispatchToProps)(App);
