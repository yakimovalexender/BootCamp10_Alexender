import React from 'react'; 
import logo from './assets/logo.png';
import avatar from './assets/no_user.jpg';
import style from "./AppHeader.module.css";
import Logo from '../logo/Logo';
import Avatar from '../avatar/Avatar';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';




const navItems = ['menu', 'about' , 'contact', 'delivery'];


const AppHeader =() => (
    <header className={style.header}>
        <Logo image={logo}/>
        <div className={style.logo}>
       <logo image ={logo} />

        </div>
<Navigation items={navItems}/>

    <div className={style.usermenu}>
    <UserMenu avatar={avatar} name='Bob Marley'/>
    
    </div>
    </header>
)

export default AppHeader ;