import React from 'react'
import style from './../Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const BasketIcon = () => (
   <a href="#menu" className={style.basket}>
      <FontAwesomeIcon icon={faShoppingCart} />
   </a>
)