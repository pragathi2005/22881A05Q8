import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RedirectPage from './pages/RedirectPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:shortCode" element={<RedirectPage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  )
}

export default App
