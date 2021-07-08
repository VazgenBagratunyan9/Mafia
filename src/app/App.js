import logo from '../logo.svg';
import {useState,useEffect} from 'react'
import styles from './App..module.scss';
import {connect} from 'react-redux'
import Input from "../components/input/Input.component";
import Start from "../pages/start/Start";
import Players from "../pages/playersRoles/PlayersRoles.page";
import Loader from "../components/loader/Loader.component";
import PlayerList from "../pages/playersList/PlayerList.page";
const  App = (props)=> {

    const [toPlayer,setToPlayer] = useState(false)
    const [toStart,setToStart] = useState(true)
    const [toList,setToList] = useState(false)

    console.log(props)
    const {rol,players} = props


    useEffect(()=>{
        if(!!rol.length){
            setToPlayer(true)
            setToStart(false)
        }

        if(rol.length == 0){
            setToPlayer(false)

        }

        if(rol.length == 0 && players.length > 1){
            setToList(true)
        }


    },[rol])

  return (
    <div className={styles.app}>
        {toStart && <Start />}
        {toPlayer &&  <Players />}
        {toList && <PlayerList />}
        {/*<div>*/}
        {/*    <Players />*/}
        {/*</div>*/}
    </div>
  );
}

const mapStateToProps = (store)=>{
    return {
        rol:store.players.rols,
        players:store.players.players,
        count:store.players.count,
    }
}
export default connect(mapStateToProps)(App);
