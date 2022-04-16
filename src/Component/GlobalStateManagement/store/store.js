import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";

import todoSlice from "./todoSlice";

const reducers = combineReducers({
    todo : todoSlice
})

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({reducer: persistedReducer,  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {      
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],      
        },
    }), 
})
const persistor = persistStore(store)

export { store, persistor }