import { legacy_createStore as createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
  };


const reducer = (state={Data: [], price: 0, quantity: 1, LoggedIn: false}, action)=>{

    const prices = parseFloat(action.price)

    switch(action.type){
        case 'Add':
            
            
            const itemToAdd = {
                ...action.payload,
                option: action.portion,
                price: action.price,
                quantity: 1
              };
              const exist = state.Data.findIndex(((item)=>action.payload.name === item.name && action.portion === item.option))
              if(exist !== -1){
                const newDataQuantity = [...state.Data]
                newDataQuantity[exist].quantity += 1
                return{...state, Data: [...newDataQuantity], price: state.price + prices}
              }
              else{
                return{...state, Data: [...state.Data, itemToAdd], price: state.price+ prices}
              }
        
        case 'Remove':
          const exists = state.Data.findIndex(((item)=>action.payload.name === item.name && action.option === item.option))

          if(exists > -1){
            const newDataQuantity = [...state.Data]
            if (newDataQuantity[exists].quantity >=1){
              newDataQuantity[exists].quantity -= 1
              if(newDataQuantity[exists].quantity == 0){
                newDataQuantity.splice(exists, 1)
                return{...state, Data: [...newDataQuantity], price: state.price - prices}
              }
              return{...state, Data: [...newDataQuantity], price: state.price - prices}
            } 
          }

        
        case 'AddUpdate':
          const exis = state.Data.findIndex((item)=>action.payload.name === item.name && action.option === item.option)

          if(exis > -1){
            const newDataquatity = [...state.Data]
            if (newDataquatity[exis].quantity >=1){
              newDataquatity[exis].quantity +=1
              return{...state, Data: [...newDataquatity], price: state.price + prices}
              
            }
          }

        case 'LogToggleOn':
          return {Data: [], price: 0, quantity: 1, LoggedIn: true}
        
        case 'LogToggleOff':
          return {Data:[], price: 0, quantity: 1, LoggedIn: false}

        case 'Reset state':
          return {Data: [], price: 0, quantity: 1, LoggedIn: false}

            

        default:
            return(state)
    }




}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

