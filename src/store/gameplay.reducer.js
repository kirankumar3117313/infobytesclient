import { GAME_DATA, GET_ALL_GAMES, GET_OTHER_USER, MY_USER } from "./gameplay.type";

const initial={
    gamedata:{},
    myuser:{},
    otheruser:{},
    userallgames:[]
 }

 export const GetGameData=(state=initial,{type,payload})=>{
    switch(type){
        case GAME_DATA:{
            return {
                ...state,
                gamedata:payload
            }
        }
        case MY_USER:{
           
            return {
                ...state,
                myuser:payload
            }
        }
        case GET_ALL_GAMES:{
            
            return {
                ...state,
                userallgames:[...payload]
            }
        }
        case GET_OTHER_USER:{
            return {
                ...state,
                otheruser:payload
            }
        }
        default:{
            return state
        }
    }
 }