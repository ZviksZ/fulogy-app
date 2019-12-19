import React from 'react'
import style from '../Navbar.module.scss'

export const MainMenu = props => {
   return (
      <nav className={style.dropMenu}>
         <ul>
            <li>
               <a href="/">1</a>
            </li>
            <li>
               <a href="/">2</a>
            </li>
            <li>
               <a href="/">3</a>
            </li>
         </ul>
      </nav>
   )
}
