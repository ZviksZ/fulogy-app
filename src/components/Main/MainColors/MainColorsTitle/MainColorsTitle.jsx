import React            from 'react'
import style            from '../../Main.module.scss'

export const MainColorsTitle = ({setDetailMode}) => {
   return (
         <h3 className={style.colorTitle}>
            <span onClick={() => setDetailMode(true)}>
               i
            </span>
            Выберите цвет сечения
         </h3>
   )
}