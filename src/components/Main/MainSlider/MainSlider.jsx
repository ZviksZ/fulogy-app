import React  from 'react';
import Slider from 'infinite-react-carousel';
import style  from '../Main.module.scss'

export const MainSlider = ({activeColorId, colors}) => {
   debugger
   const activeColor = colors.filter(color => color.colorId === activeColorId)      
   const images = activeColor[0].colorImages
   
   return (
      <Slider dots 
              className={style.mainSlider} 
              duration={200} 
              arrows={false}
              shift={0}
              centerMode={true}
      >
         {
            images.map((c, i) => {
               return  <div className={style.item} key={`${activeColor[0].colorId}i`}>
                  <img src={c} alt=""/>
               </div>
            })
         }         
      </Slider>
   )
}