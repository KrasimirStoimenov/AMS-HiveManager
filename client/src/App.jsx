import { Routes, Route } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import '../public/input-form-styles.css'

import Container from 'react-bootstrap/esm/Container'

import Home from './components/home/Home'
import Header from './components/header/Header'
import ApiaryAdd from './components/apiary-add/ApiaryAdd'
import HiveDetails from './components/hive-details/HiveDetails';
import HiveAdd from './components/hive-add/HiveAdd';
import BeeQueenList from './components/beeQueen-list/BeeQueenList';
import BeeQueenAdd from './components/beeQueen-add/BeeQueenAdd';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/login/Login';

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    }
    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contextData}>
            <Header />

            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/apiaries/add' element={<ApiaryAdd />} />
                    <Route path='/hives/add' element={<HiveAdd />} />
                    <Route path='/hives/:hiveId/details' element={<HiveDetails />} />
                    <Route path='/beeQueens' element={<BeeQueenList />} />
                    <Route path='/beeQueens/add' element={<BeeQueenAdd />} />
                </Routes>
            </Container>
        </AuthContext.Provider>
    )
}

export default App
