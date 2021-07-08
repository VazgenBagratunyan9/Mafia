import {useState} from 'react';
import styles from './Start.module.scss'
import classNames from 'classnames'
import {connect} from 'react-redux'
import Button from "src/components/button/Button.component";
import {addRol} from "src/redux/players/players.action";


//SVG
import {ReactComponent as PlusSVG} from 'src/assets/PlusSVG.svg'
import {ReactComponent as MinusSVG} from 'src/assets/MinusSVG.svg'

const Start = (props) =>{

    const [mafiaCount,setMafiaCount] = useState(12)
    const [peacefulCount,setPeacefulCount] = useState(12)
    const [don,setDon]= useState(true)
    const [sheriff,setSheriff]= useState(true)

    const {add} = props

    const createRol = ()=>{

        const seting = {
            mafiaCount:+mafiaCount,
            peacefulCount:+peacefulCount,
            don:don,
            sheriff:sheriff
        }
        console.log(seting)
        add(seting)
    }
    console.log(props)
    return (
        <div className={styles.container}>
            <h1>Mafia</h1>
            <span className={styles.roleName}>Mafia</span>
            <div className={styles.count}>

                <span className={'u-cursor--pointer'} onClick={()=>{setMafiaCount(prev=>+prev-1)}}><MinusSVG /></span>
                    <input type='number' value={mafiaCount} onChange={(e)=>{setMafiaCount(e.target.value)}}/>
                <span className={'u-cursor--pointer'} onClick={()=>{setMafiaCount(prev=>+prev+1)}}><PlusSVG /></span>
            </div>
            <span className={styles.roleName}>Peaceful</span>
            <div className={styles.count}>
                <span className={'u-cursor--pointer'} onClick={()=>{setPeacefulCount(prev=>+prev-1)}}><MinusSVG /></span>
                    <input type='number' value={peacefulCount} onChange={(e)=>{setPeacefulCount(e.target.value)}}/>
                <span className={'u-cursor--pointer'} onClick={()=>{setPeacefulCount(prev=>+prev+1)}}><PlusSVG /></span>
            </div>
            <div>
                <label>
                    Don
                    <input
                        type="checkbox"
                        checked={don}
                        onChange={(e)=>{setDon(e.target.checked)}}
                    />
                </label>
                <label>
                    Sheriff
                    <input
                        type="checkbox"
                        checked={sheriff}
                        onChange={(e)=>{setSheriff(e.target.checked)}}
                    />
                </label>
            </div>
            <Button onClick={()=>{createRol()}}> GO </Button>
        </div>
    )
}
const mapStateToPorps = (store) =>{
    return store
}

const mapDispatchToProps = (dispatch)=>{
    return{
        add:(seting)=>dispatch(addRol(seting))
    }

}

export default connect(mapStateToPorps,mapDispatchToProps)(Start)