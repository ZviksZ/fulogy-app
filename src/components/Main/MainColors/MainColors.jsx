import React            from 'react'
import {setActiveColor} from "../../../redux/constructReducer.js";
import {MainColorItem}  from "./MainColorItem/MainColorItem.jsx";
import style            from '../Main.module.scss'

export const MainColors = ({activeColorId, colors, setDetailMode,setActiveColor}) => {
   return (
      <>
         <h3>
            <span onClick={() => setDetailMode(true)}>
               i
            </span>
            Выберите цвет сечения
         </h3>

         <ul className={style.mainColors}>
            {
               colors.map(color => {
                  return <MainColorItem itemId={color.colorId}
                                        key={color.colorId}
                                        setActiveColor={setActiveColor}
                                        colorType={color.colorType}
                                        isActive={activeColorId === color.colorId}
                                        previewImg={color.previewImage}/>
               })
            }

         </ul>
      </>
   )
}