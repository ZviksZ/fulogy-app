import cn    from "classnames";
import React from 'react'
import style from './../BottomMenu.module.scss'

export const BottomMenuItem = ({id, name, activeId, setCurrentTab}) => (
   <li id={id}
       className={
          cn({[style.active]: activeId === id},
             {[style.itemRed]: activeId < id},
             style.item)
       }
       onClick={() => setCurrentTab(id)}>
      <span>
         {name}
      </span>
   </li>
)
