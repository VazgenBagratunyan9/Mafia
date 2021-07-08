import logo from '../logo.svg';
import {useState,useEffect} from 'react'
import styles from './App..module.scss';
import {connect} from 'react-redux'
import Input from "../components/input/Input.component";
import Start from "../pages/start/Start";
import Players from "../pages/players/Players.page";
import Loader from "../components/loader/Loader.component";
const  App = (props)=> {
    const [load,setLoad] = useState(true)
    console.log(props)
    const {rol} = props
    const loaderChange = ()=>{
        setLoad(false)
    }
    useEffect(()=>{
        const stop =  setTimeout(()=>{setLoad(false)},2000)

        console.log(load)
        return ()=>{
            console.log('unmount')
            clearTimeout(stop)
        }
    },[])
    console.log(load)
  return (
      load?
          <Loader />
          :
    <div className={styles.app}>
        {!rol.length && <Start />}
        {!!rol.length &&  <Players />}
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
