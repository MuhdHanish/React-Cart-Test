import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartSlice/cartSlice";

const persistConfig = {
    key: "root",
    storage,
};

const persistCartReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
    reducer: {
        cartReducer: persistCartReducer
    },
    middleware: [],
});

export const persistor = persistStore(store);
