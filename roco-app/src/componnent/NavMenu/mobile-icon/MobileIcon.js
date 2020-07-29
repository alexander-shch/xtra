import React from 'react';
import{IconContiner,MenuIcon} from './MobileMenu.style'



const MobileMenuIcon=({handdleClick,menuOpen})=>{
    
    return(
        
        <IconContiner onClick={handdleClick}  >
        <MenuIcon menuOpen={menuOpen}  />

        </IconContiner>
       
    )
}

export default MobileMenuIcon;