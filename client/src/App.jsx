import { Routes, Route } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import '../public/input-form-styles.css'

import Container from 'react-bootstrap/esm/Container'

import Home from './components/home/Home'
import Header from './components/header/Header'
import ApiaryAdd from './components/apiary-add/ApiaryAdd'
import HiveList from './components/hive-list/HiveList'
import HiveDetails from './components/hive-details/HiveDetails';
import HiveAdd from './components/hive-add/HiveAdd';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apiaries/add' element={<ApiaryAdd />} />
          <Route path='/hives/add' element={<HiveAdd />} />
          <Route path='/hives/:hiveId/details' element={<HiveDetails />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
