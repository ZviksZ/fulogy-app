import React             from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare}   from '@fortawesome/free-solid-svg-icons'
import style             from '../../Main.module.scss'
import cn                from "classnames";

export const MainColorItem = ({itemId, previewImg, isActive, colorType, setActiveColor}) => {
   const changeActiveColor = () => {
      setActiveColor(itemId)
   }
   return (
      <li className={cn({[style.active]: isActive}, style.colorItem)}
          onClick={changeActiveColor}>
         {
            isActive && <FontAwesomeIcon icon={faCheckSquare} className={style.activeIcon}/>
         }
         <img src={previewImg} alt=""/>
         <span className={style.colorType}>{colorType}</span>
      </li>
   )
}