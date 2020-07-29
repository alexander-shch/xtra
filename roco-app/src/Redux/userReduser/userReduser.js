const INITAL_STATE={
    userLoged:null,
    pending:false,
    error:null
}


const userReducer=(state=INITAL_STATE,action)=>{
    switch(action.type){
        case 'USER_LOG_PENDING':
            return{...state,pending:true}
        case 'SIGNIN_SUCSESS':
            return{...state,userLoged:action.payload,pending:false}
        case 'SIGNOUT_SUCSESS':
            return{...state,userLoged:null}
        case 'SIGNOUT_FAILED':
        case 'SIGNIN_FAILED':
            return {...state,error:action.payload,pending:false}
    
        default: return state;
    }
}

export default userReducer;