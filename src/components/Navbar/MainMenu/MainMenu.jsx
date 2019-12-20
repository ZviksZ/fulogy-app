import React from 'react'
import style from '../Navbar.module.scss'

export const MainMenu = props => {
   return (
      <nav className={style.dropMenu}>
         <ul>
            <li>
               <a href="/">Обучающее видео</a>
            </li>
            <li>
               <a href="/">Оформление заказа</a>
            </li>
            <li>
               <a href="/">Оплата</a>
            </li>
            <li>
               <a href="/">Доставка</a>
            </li>
            <li>
               <a href="/">Гарантия</a>
            </li>
            <li>
               <a href="/">Возврат</a>
            </li>
            <li>
               <a href="/">Контакты</a>
            </li>
            <li>
               <a href="/">Партнерам</a>
            </li>
         </ul>
      </nav>
   )
}
