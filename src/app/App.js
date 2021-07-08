import logo from '../logo.svg';
import {useState,useEffect} from 'react'
import styles from './App..module.scss';
import {connect} from 'react-redux'
import Input from "../components/input/Input.component";
import Start from "../pages/start/Start";
import Players from "../pages/players/Players.page";
const  App = (props)=> {

  return (
    <div className={styles.app}>


            <Start />

        {/*<div>*/}
        {/*    <Players />*/}
        {/*</div>*/}
    </div>
  );
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(App);
