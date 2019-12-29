import React     from 'react'
import style     from '../Main.module.scss'

export const MainInfo = ({techSpec}) => {
   return (
      <div className={style.mainInfo}>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Класс:</span>
            <span className={style.infoTypeClass}>{techSpec.class}</span>
         </div>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Потребляемая мощность:</span>
            <span>{techSpec.power} Вт.</span>
         </div>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Сила света:</span>
            <span>{techSpec.lightPower}</span>
         </div>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Гарантия:</span>
            <span>{techSpec.warranty} года</span>
         </div>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Монтаж:</span>
            <span>{techSpec.mounting ? 'Да' : 'Нет'}</span>
         </div>
         <div className={style.mainInfoItem}>
            <span className={style.infoType}>Итого сумма:</span>
            <span>{techSpec.totalSum} рублей</span>
         </div>
      </div>
   )
}

