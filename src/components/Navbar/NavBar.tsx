import React, {FC} from 'react';
import './navbar.css'
import Logo from '../../assets/img/logo.png'
import Exit from '../../assets/img/Exit.png'
import {useNavigate} from 'react-router-dom'
import {removeUser, setIsAuth} from "../../store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const NavBar:FC = () => {
    const {isAuth} = useAppSelector(state => state.user)
    const {user} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    let navigate = useNavigate()

    const logout = () => {
        dispatch(setIsAuth(false))
        dispatch(removeUser())
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="logo" className='navbar__logo'/>
            {isAuth &&
            <div className='navbar__exit' onClick={() => logout()}>
                <div>{user}</div>
                <img className='navbar__logo_exit' src={Exit} alt="exit" />
            </div>
            }
            </div>
        </div>
    );
};

export default NavBar;
