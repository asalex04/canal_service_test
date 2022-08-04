import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isAuth: boolean
    user: string
}

export const initialState: IState = {
    isAuth: false,
    user: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = ''
        }
    }
})

export const {setIsAuth, setUser, removeUser} = userSlice.actions
export default userSlice.reducer
