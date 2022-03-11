import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-bg text-white">
      <div className="container mx-auto bg-bg px-2 font-body text-base">
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
