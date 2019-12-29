import React  from 'react';
import style  from '../Main.module.scss'
import SlideShow from 'react-image-show';


export const MainSlider = ({activeColorId, colors}) => {
   const activeColor = colors.filter(color => color.colorId === activeColorId)  
   
   return (
      <div className={style.mainSlider}>
         <SlideShow
            images={activeColor[0].colorImages}
            width="100%"
            imagesWidth="100%"
            imagesHeight="300px"
            arrows={false}
            indicators
         />
      </div>
      
      
   )
}