export const addRolUtil = (seting)=>{
    const rol = []
    const {mafiaCount,peacefulCount,don,sheriff} = seting
    const count = mafiaCount + peacefulCount

    for(let i = 0 ; i < count ; i++){
        if(i < mafiaCount){
            if(don && i === mafiaCount -1){
                rol.push('don')
            }else{
                rol.push('mafia')
            }
        }else{
            if(sheriff && i === count -1){
                rol.push('sheriff')
            }else{
                rol.push('peaceful')
            }
        }


    }

    return rol
}


export const createRolPlayerUtil = (rols,players,playerSeting)=>{
    const copyRols = [...rols];
    const copyPlayers = [...players]
    const {idx,player} = playerSeting
    console.log(copyRols,copyPlayers,playerSeting)
    if(copyRols.length > 0){
        copyPlayers.push({rol:copyRols[idx],player:player})
    }
    copyRols.splice(idx,1)

    return {
        rols:copyRols,
        players:copyPlayers
    }
}