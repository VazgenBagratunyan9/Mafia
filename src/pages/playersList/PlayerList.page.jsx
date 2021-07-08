import styles from './PlayerList.module.scss'
import {connect} from "react-redux";

const PlayerList = (props)=>{
    console.log(props)
    const {players} = props
    return (
        <div className={styles.container}>
            <h1>Mafia</h1>
                <ul className={styles.list}>
                    {players.map((item)=>{
                        return (<li>
                            <span>Role:{item.role} </span>
                            <span>Player:{item.player}</span>
                            <span>Kill</span>
                            <span>Removed</span>
                        </li>)
                    })}
                </ul>
        </div>
    )
}
const mapStateToProps = store =>{
    return {
        players:store.players.players
    }
}

export default connect(mapStateToProps)(PlayerList)