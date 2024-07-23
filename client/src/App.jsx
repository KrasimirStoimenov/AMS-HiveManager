import { Routes, Route } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import '../public/input-form-styles.css'

import Container from 'react-bootstrap/esm/Container'

import Home from './components/home/Home'
import Header from './components/header/Header'
import ApiaryCreate from './components/apiary-create/ApiaryCreate'
import HiveList from './components/hive-list/HiveList'
import HiveDetails from './components/hive-details/HiveDetails';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apiary/create' element={<ApiaryCreate />} />
          <Route path='hives/:hiveId/details' element={<HiveDetails />} />
        </Routes>
      </Container>

    </>
  )
}

export default App
