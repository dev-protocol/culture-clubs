import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'
import Container from './components/Container'

function App() {
  return (
    <div className="bg-bg">
      <div className="bg-bg font-body text-base">
        <BrowserRouter>
          <Container>
            <Header />
          </Container>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
