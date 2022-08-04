import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice'
import postReducer from './reducers/PostSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer
    },
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
