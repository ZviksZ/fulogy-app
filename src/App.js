import React, {useState} from 'react';
import {Provider}        from "react-redux";
import Main              from "./components/Main/Main.jsx";
import {Navbar}          from "./components/Navbar/Navbar.jsx";
import store             from "./redux/redux-store.js";

const App = () => {
   const [detailMode, setDetailMode] = useState(false)
   return (
      <>
         <Navbar/>
         {
            detailMode
               ? <div>
                  detail
                  <button onClick={() => setDetailMode(false)}>back</button>
               </div>
               : <Main setDetailMode={setDetailMode}/>
         }
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
