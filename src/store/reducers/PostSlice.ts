import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPhoto, IPost, IUser} from "../../types";

export interface IState {
    posts: IPost[]
    users: IUser[]
    photos: IPhoto[]
}

const initialState: IState = {
    posts: [],
    users: [],
    photos: []
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload
        },
        getUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        getPhotos(state, action: PayloadAction<IPhoto[]>) {
            state.photos = action.payload
        },
        addPost(state, action: PayloadAction<IPost>) {
            state.posts.push(action.payload)
        },
        deletePost(state, action: PayloadAction<number>){
            state.posts.filter(post => post.id !== action.payload)
        }
    }
})

export const {getPosts, getUsers, getPhotos} = postSlice.actions
export default postSlice.reducer
