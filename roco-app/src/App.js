import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {setUserLog} from './Redux/userReduser/user.actions'
import SignIn from '../src/pages/SignIn/SignIn'
import Main from './pages/Main/Main'

const App=({userLoged,setUserLog})=> {

  useEffect(()=>{
    setUserLog()
  },[setUserLog])
  
  return (
    <>
    {userLoged
    ?<Main/>
    :<SignIn />  
    }
    </>
  );
}

const mapStateToProps=state=>({
  userLoged:state.user.userLoged
})

const mapDispatchToProps=dispatch=>({
  setUserLog:()=>dispatch(setUserLog())
})

export default connect(mapStateToProps,mapDispatchToProps) (App);


