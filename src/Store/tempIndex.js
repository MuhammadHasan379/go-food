import { legacy_createStore as createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
  };


const reducer = (state={Data: []}, action)=>{

    switch(action.type){
        case 'Add':
            return{...state, Data: [...state.Data, action.payload]}

        default:
            return(state)
    }




}

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

