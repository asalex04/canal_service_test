import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";
import {useAppSelector} from "./hooks/redux";
import NavBar from "./components/Navbar/NavBar";

function App() {
    const {isAuth} = useAppSelector(state => state.user)

  return (
      <BrowserRouter>
        <div>
            <NavBar />
          <Routes>
              {isAuth && <Route path='/posts' element={<Posts/>} />}
              <Route path='/' element={<Login/>} />
              <Route
                  path="*"
                  element={<Login/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
