import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import './login.css'
import {authorization} from '../../api/userApi'
import {setIsAuth, setUser} from "../../store/reducers/UserSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    const auth = async () => {
        const data = await authorization(login, password)
        if (data) {
            dispatch(setUser(data.login))
            dispatch(setIsAuth(true))
            navigate('/posts')
        }
    }

    return (
        <div className='wrap'>
            <div className='auth'>
                <div className="auth__header" onClick={() => auth()}>Authorization</div>
                <div className={'auth__login'}>
                    login
                    <input
                        value={login}
                        type='text'
                        className='input'
                        onChange={e => setLogin(e.target.value)}
                    />
                </div>
                <div className='auth__login'>
                    password
                    <input
                        value={password}
                        type='password'
                        className='input'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
