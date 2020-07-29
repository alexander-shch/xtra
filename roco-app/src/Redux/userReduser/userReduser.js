const INITAL_STATE={
    userLoged:null,
    error:null
}


const userReducer=(state=INITAL_STATE,action)=>{
    switch(action.type){
        case 'SIGNIN_SUCSESS':
            return{...state,userLoged:action.payload}
        case 'SIGNOUT_SUCSESS':
            return{...state,userLoged:null}
        case 'SIGNOUT_FAILED':
        case 'SIGNIN_FAILED':
            return {...state,error:action.payload}
    
        default: return state;
    }
}

export default userReducer;