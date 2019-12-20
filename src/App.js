import React, {useState} from 'react';
import {Provider}        from "react-redux";
import BottomMenu     from "./components/BottomMenu/BottomMenu.jsx";
import Main              from "./components/Main/Main.jsx";
import InfoPage          from "./components/InfoPage/InfoPage.jsx";
import {Navbar}          from "./components/Navbar/Navbar.jsx";
import store             from "./redux/redux-store.js";

const App = () => {
   const [detailMode, setDetailMode] = useState(false)
   return (
      <>
         <Navbar/>         
         <div className="main-content">
            {
               detailMode
                  ? <InfoPage setDetailMode={setDetailMode}/>
                  : <Main setDetailMode={setDetailMode}/>
            }
         </div>         
         <BottomMenu/>
      </>
   );
}

const FulogyApp = () => {
   return (
      <Provider store={store}>
         <App/>
      </Provider>
   )
}


export default FulogyApp;
