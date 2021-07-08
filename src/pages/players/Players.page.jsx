import {useState} from "react";
import styles from './Players.module.scss'
import {addRol, createRolPlayer,create} from '../../redux/players/players.action'
import {connect} from 'react-redux'
import Input from "../../components/input/Input.component";
import Button from "../../components/button/Button.component";
const Players = (props)=>{
    const [player,setPlayer] = useState('')
    const [playerRol,setPlayerRol] = useState('')
    console.log(props)
    const {rol,createPlayer,cre} = props
    const createRol = ()=>{
        const idx = Math.round(Math.random() * (rol.length - 1))
        setPlayerRol(rol[idx])
        createPlayer({idx:idx,player:player})
    }
    return(
        <div className={styles.container}>
            <h1>Mafia</h1>
            <div className={styles.player}>
                    Player
                    <Input
                        value={player}
                        onChange={(e)=>setPlayer(e.target.value)}
                    />
                    <div className={styles.userRol}>
                        Rol:{!!playerRol && <span className={styles.rol}>{playerRol}</span>}
                    </div>
                    <Button onClick={()=>{createRol()}}>GO</Button>
            </div>
        </div>
    )
}
const mapStateToProps = (store)=>{
    return {
        rol:store.players.rols
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createPlayer:(seting)=>dispatch(createRolPlayer(seting)),
        cre: () =>dispatch(create())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Players)