import React             from 'react'
import {MainColorItem}   from "./MainColorItem/MainColorItem.jsx";
import style             from '../Main.module.scss'
import {MainColorsTitle} from "./MainColorsTitle/MainColorsTitle.jsx";

export const MainColors = ({activeColorId, colors, setDetailMode,setActiveColor}) => {
   return (
      <>         
         <MainColorsTitle setDetailMode={setDetailMode}/>

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