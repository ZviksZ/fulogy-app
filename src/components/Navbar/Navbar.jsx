import React, {useState} from 'react'
import {Logo}            from "../common/Logo/Logo.jsx";
import {MainMenu}        from "./MainMenu/MainMenu.jsx";
import style             from './Navbar.module.scss'
import logo              from '../../assets/images/logo.png'
import basket              from '../../assets/images/basket.png'
import HamburgerMenu   from 'react-hamburger-menu'

export const Navbar = props => {
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleMenuOpen = () => {
      setMenuOpen(!menuOpen)
   }

   return (
      <header className={style.header}>

         <Logo src={logo}/>

         <a href="#">
            <img src={basket} alt="basket"/>
         </a>
         
         <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={toggleMenuOpen}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='#fff'
            borderRadius={0}
            animationDuration={0.5}
         />

         {menuOpen && <MainMenu/>}

      </header>
   )
}