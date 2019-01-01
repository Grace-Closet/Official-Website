import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './../styles/Main.css';
import Home from './Home.jsx';


const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/apparel' component={Apparel}/>
        <Route path='/jewelry' component={Jewelry}/>
        <Route path='/shoes' component={Shoes}/>
      </Switch>
    </main>
  )
}

export default Main;