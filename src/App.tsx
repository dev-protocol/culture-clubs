import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'

function App() {
  return (
    <div className="text-white bg-bg">
      <div className="container mx-auto px-2 font-body bg-bg text-base">
        <BrowserRouter>
          <Header />
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
