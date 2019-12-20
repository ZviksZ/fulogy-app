import React     from 'react'
import style     from './InfoPage.module.scss'
import {connect} from "react-redux";

const InfoPage = ({setDetailMode, detailInfo}) => {
   const backToMain = () => setDetailMode(false)
   
   return (
      <div className={style.detailPage}>         
         <span onClick={backToMain} className={style.backBtn}>˂ Вернуться</span>
         <div className={style.infoBlock}>
            {
               detailInfo.map(d => <p key={d.length}>{d}</p>)
            }
         </div>         
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      detailInfo: state.construct.detailInfo
   }
}

export default connect(mapStateToProps)(InfoPage);