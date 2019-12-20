import React            from 'react'
import {connect}        from "react-redux";
import {setActiveColor} from "../../redux/constructReducer.js";
import style            from './Main.module.scss'
import {MainColors}     from "./MainColors/MainColors.jsx";
import {MainInfo}       from "./MainInfo/MainInfo.jsx";
import {MainSlider}     from "./MainSlider/MainSlider.jsx";


const Main = ({construct, setDetailMode, setActiveColor}) => {
   return (
      <div className={style.mainBlock}>
         <MainSlider activeColorId={construct.activeColorId}
                     colors={construct.colors}/>
         <div>
            <MainInfo techSpec={construct.techSpec}/>
            <MainColors setDetailMode={setDetailMode}
                        activeColorId={construct.activeColorId}
                        colors={construct.colors}
                        setActiveColor={setActiveColor}
            />
         </div>
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      construct: state.construct
   }
}

export default connect(mapStateToProps, {setActiveColor})(Main);