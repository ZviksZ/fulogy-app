const SET_ACTIVE_COLOR = 'fulogy/constructor/SET_ACTIVE_COLOR';

let initialState = {
   detailInfo: '',
   techSpec: {
      class: 'Standart',
      power: 59,
      lightPower: '3459 Люмен = 7.5 ламп накаливания по 40 Вт',
      warranty: 3,
      mounting: true,
      totalSum: 2594      
   },
   activeColorId: 1,
   colors: [
      {
         colorId: 1,
         colorType: 'Теплый',
         previewImage: 'http://i.piccy.info/i9/7114e1b4adcbe2bb42cc5465d8f8bed1/1576823346/64490/1353445/warm.jpg',
         colorImages: [
            'http://i.piccy.info/i9/7114e1b4adcbe2bb42cc5465d8f8bed1/1576823346/64490/1353445/warm.jpg',
            'http://i.piccy.info/i9/7114e1b4adcbe2bb42cc5465d8f8bed1/1576823346/64490/1353445/warm.jpg',
            'http://i.piccy.info/i9/7114e1b4adcbe2bb42cc5465d8f8bed1/1576823346/64490/1353445/warm.jpg'
         ]
      },
      {
         colorId: 2,
         colorType: 'Дневной',
         previewImage: 'http://i.piccy.info/i9/37ba390e1b5d49ffa251a88f1495544b/1576823386/81447/1353445/day.jpg',
         colorImages: [
            'http://i.piccy.info/i9/37ba390e1b5d49ffa251a88f1495544b/1576823386/81447/1353445/day.jpg',
            'http://i.piccy.info/i9/37ba390e1b5d49ffa251a88f1495544b/1576823386/81447/1353445/day.jpg',
            'http://i.piccy.info/i9/37ba390e1b5d49ffa251a88f1495544b/1576823386/81447/1353445/day.jpg'
         ]
      },
      {
         colorId: 3,
         colorType: 'Холодный',
         previewImage: 'http://i.piccy.info/i9/14504ff59e89330d49c8a1af87e38245/1576823410/65335/1353445/cold.jpg',
         colorImages: [
            'http://i.piccy.info/i9/14504ff59e89330d49c8a1af87e38245/1576823410/65335/1353445/cold.jpg',
            'http://i.piccy.info/i9/14504ff59e89330d49c8a1af87e38245/1576823410/65335/1353445/cold.jpg',
            'http://i.piccy.info/i9/14504ff59e89330d49c8a1af87e38245/1576823410/65335/1353445/cold.jpg'
         ]
      }
   ]
};

const constructReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ACTIVE_COLOR:
         return {
            ...state,
            activeColorId: action.colorId
         }
     
      default:
         return state;
   }
}

export const setActiveColor = (colorId) => ({type: SET_ACTIVE_COLOR, colorId})



export default constructReducer;