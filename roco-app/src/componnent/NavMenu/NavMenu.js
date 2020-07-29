import React from 'react';
import{Link} from 'react-router-dom';
import './NavMenu.style.scss';
import {connect} from 'react-redux';
import {onsignOut} from '../../Redux/userReduser/user.actions'
import {toggleView} from '../../Redux/settingsView/settings.actions'
import Settings from '../../componnent/settings/Settings'



const NavMenu=({signOut,toggleView,settingsView})=>{


    return(
        <div className='menu-container'>
            <div className='menu-links-container'>
            <Link className='single-link' to='/'> לובי </Link>
            <Link className='single-link' to='/'> קורסים </Link>
            <Link className='single-link' to='/'> מרצים </Link>
            <Link className='single-link' to='/'> נרשמים </Link>
            <Link className='single-link' to='/'> דוחות </Link>
            <Link className='single-link' to='/'> תשלומים </Link>
            <Link className='single-link' to='/'> דרושים </Link>  
            </div> 
            <div className='icon-menu-container'>
            <div className='iconLink' onClick={()=>signOut()}> SIGN OUT</div>
            <div className='iconLink settings-icon' onClick={()=>toggleView()}>&#9881;</div>
            {!settingsView?<Settings/>:null}
            </div>
        </div>
       
    )
}
const mapDispatchToProps=dispatch=>({
    signOut:()=>dispatch(onsignOut()),
    toggleView:()=>dispatch(toggleView())
})

const mapStateToProps=state=>({
    settingsView:state.toggleSettingsView.hidden
})

export default connect(mapStateToProps,mapDispatchToProps) (NavMenu);