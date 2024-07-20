import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/home/Home'
import Header from './components/header/Header'
import Container from 'react-bootstrap/esm/Container'

function App() {
  return (
    <>
      <Header />

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>

    </>
  )
}

export default App
