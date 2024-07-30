import { Routes, Route } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import '../public/input-form-styles.css';
import '../public/list-items-helper-button-styles.css';

import { AuthContextProvider } from './contexts/AuthContext';
import { HiveContextProvider } from './contexts/HiveContext';

import Container from 'react-bootstrap/esm/Container'

import Home from './components/home/Home'
import Header from './components/header/Header'
import ApiaryAdd from './components/apiary-add/ApiaryAdd'
import HiveDetails from './components/hive-details/HiveDetails';
import HiveAdd from './components/hive-add/HiveAdd';
import BeeQueenList from './components/beeQueen-list/BeeQueenList';
import BeeQueenAdd from './components/beeQueen-add/BeeQueenAdd';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import HiveInspectionList from './components/hive-details/hive-inspection-list/HiveInspectionList';
import HiveInspectionAdd from './components/hive-details/hive-inspection-list/hive-inspection-add/HiveInspectionAdd';

function App() {
    return (
        <AuthContextProvider>
            <Header />

            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/apiaries/add' element={<ApiaryAdd />} />
                    <Route path='/hives/add' element={<HiveAdd />} />

                    <Route element={<HiveContextProvider />}>
                        <Route path='/hives/:hiveId/details' element={<HiveDetails />} />
                        <Route path='/hives/:hiveId/inspections' element={<HiveInspectionList />} />
                        <Route path='/hives/:hiveId/inspections/add' element={<HiveInspectionAdd />} />
                    </Route>

                    <Route path='/beeQueens' element={<BeeQueenList />} />
                    <Route path='/beeQueens/add' element={<BeeQueenAdd />} />
                </Routes>
            </Container>
        </AuthContextProvider>
    )
}

export default App
