import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Container from 'react-bootstrap/esm/Container'
import ApiaryCreate from './components/apiary-create/ApiaryCreate'

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apiary/create' element={<ApiaryCreate />} />
        </Routes>
      </Container>

    </>
  )
}

export default App
