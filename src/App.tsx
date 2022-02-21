import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import RoomPage from './pages/room'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="container mx-auto px-2 font-body">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:room" element={<RoomPage />} />
          </Routes>
        </main>
        <div className="pt-2xl">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
