import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import './App.css';

import {useDispatch} from 'react-redux';
import {getArticles} from './redux/articles/action';
import Create from './components/Create';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles);
  }, [dispatch]);


  return (
    <>
    <Header />
    <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/contact" component={Contact} />
        <Route exact path = "/create" component={Create} />
        <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
