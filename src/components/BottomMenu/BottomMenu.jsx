import React            from 'react'
import {connect}        from "react-redux";
import {setCurrentTab}  from "../../redux/commonReducer.js";
import style            from './BottomMenu.module.scss'
import {BottomMenuItem} from "./BottomMenuItem/BottomMenuItem.jsx";

const BottomMenu = ({common, setCurrentTab}) => {
   return (
      <ul className={style.bottomMenu}>
         {
            common.tabsNames.map(tab =>  <BottomMenuItem key={tab.tabId}
                                                         setCurrentTab={setCurrentTab}
                                                         id={tab.tabId}
                                                         activeId={common.currentTab}
                                                         name={tab.tabsName}
            />)
         }
      </ul>
   )
}

let mapStateToProps = (state) => {
   return {
      common: state.common
   }
}

export default connect(mapStateToProps, {setCurrentTab})(BottomMenu);