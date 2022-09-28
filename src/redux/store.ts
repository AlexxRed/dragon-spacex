import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { dragonsReducer } from './dragonSlice';


export const store = configureStore({
    reducer: {
        dragons: dragonsReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    )]
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch