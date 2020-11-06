import React from 'react';
import Router from './Router';
import { Notification, Loading } from './components/Process';
import { connect } from 'react-redux';
import { setUserData, setLoading, pushNotification, changePage } from './Redux/actions';
import './App.css';


const mapDispatchToProps = dispatch => ({
  setUserData: (uid, name, email, url, profession, stars) => dispatch(setUserData({ uid, name, email, url, profession, stars })),
  setLoading: message => dispatch(setLoading(message)),
  pushNotification: message => dispatch(pushNotification(message)),
  changePage: page => dispatch(changePage(page))
});

function App({ setUserData, setLoading, pushNotification, changePage }) {

  return (
    <>
      <Notification />
      <Loading />
      <Router />
    </>
  );
}

export default connect(null, mapDispatchToProps)(App);
