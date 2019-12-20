import React, {useState} from 'react'
import {Logo}            from "../common/Logo/Logo.jsx";
import {BasketIcon}      from "./BasketIcon/BasketIcon.jsx";
import {MainMenu}        from "./MainMenu/MainMenu.jsx";
import style             from './Navbar.module.scss'
import logo              from '../../assets/images/logo.png'
import HamburgerMenu     from 'react-hamburger-menu'

export const Navbar = props => {
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleMenuOpen = () => {
      setMenuOpen(!menuOpen)
   }

   return (
      <header className={style.header}>

         <Logo src={logo}/>
         <BasketIcon />
         
         <div className={style.burgerWrap}>
            <HamburgerMenu
               isOpen={menuOpen}
               menuClicked={toggleMenuOpen}
               width={22}
               height={18}
               strokeWidth={2}
               rotate={0}
               color='#fff'
               borderRadius={0}
               animationDuration={0.5}
               className="mr-5"
            />
         </div>

         

         {menuOpen && <MainMenu/>}

      </header>
   )
}