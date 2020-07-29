

export const setUserLog=()=>(dispatch)=>{
 dispatch({type:'USER_LOG_PENDING'})
 fetch('http://localhost:3005/user', {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
.then(respons => respons.json())
.then(user=>{
    if(user){
      dispatch({type:'SIGNIN_SUCSESS',payload:user})
    }
})
.catch((err) => dispatch({type:'SIGNIN_FAILED',payload:err}))

}

export const onsignOut=()=>(dispatch)=>{
  localStorage.removeItem('token');
  dispatch({type:'SIGNOUT_SUCSESS'})
}

