import React from "react";

const SET_CURRENT_TAB = 'fulogy/common/SET_CURRENT_TAB';

let initialState = {
   currentTab: 6,
   tabsNames: [
      {tabId: 1, tabsName: "Вариант кухни"},
      {tabId: 2, tabsName: "Размеры"},
      {tabId: 3, tabsName: "Сенсор"},
      {tabId: 4, tabsName: "Питающий кабель"},
      {tabId: 5, tabsName: "Блок питания"},
      {tabId: 6, tabsName: "Цвет сечения"},
      {tabId: 7, tabsName: "Монтаж"},
      {tabId: 8, tabsName: "Корзина"}
   ]
};

const commonReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CURRENT_TAB:
         return {
            ...state,
            currentTab: action.tabId
         }
     
      default:
         return state;
   }
}

export const setCurrentTab = (tabId) => ({type: SET_CURRENT_TAB, tabId})



export default commonReducer;