import logo from '../logo.svg';
import {useState,useEffect} from 'react'
import styles from './App..module.scss';
import {connect} from 'react-redux'
import Input from "../components/input/Input.component";
import Start from "../pages/start/Start";
import Players from "../pages/players/Players.page";
const  App = (props)=> {
    console.log(props)
    const {rol} = props
  return (
    <div className={styles.app}>


        {!rol.length && <Start />}
        {rol.length &&  <Players />}
        {/*<div>*/}
        {/*    <Players />*/}
        {/*</div>*/}
    </div>
  );
}
const mapStateToProps = (store)=>{
    return {rol:store.players.rols}
}
export default connect(mapStateToProps)(App);
