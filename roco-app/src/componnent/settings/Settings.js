import React from 'react';
import './settings.style.scss';
import{Link} from 'react-router-dom'


const Settings=()=>{
    return(
        <div className='settings-container'>
            <Link className='setting-link' to='/'>ניהול משתמשים</Link>
            <Link className='setting-link' to='/'>ניהול כיתות</Link>
            <Link className='setting-link' to='/'>מעמ ומכפילי שכר</Link>
            <Link className='setting-link' to='/'>מידע לקורס</Link>
            <Link className='setting-link' to='/'>ניהול תחומים</Link>
            <Link className='setting-link' to='/'>משובים</Link>
            <Link className='setting-link' to='/'>סמסטרים</Link>
            <Link className='setting-link' to='/'>מילון</Link>
            <Link className='setting-link' to='/'>סיבת החזר</Link>
            <Link className='setting-link' to='/'>חוברות קרוסים</Link>
            <Link className='setting-link' to='/'>מכירות אונלין</Link>
            <Link className='setting-link' to='/'>חגים</Link>
            <Link className='setting-link' to='/'>ניהול בניינים</Link>
            <Link className='setting-link' to='/'>קופונים</Link>
        </div>
    )
}

export default Settings;