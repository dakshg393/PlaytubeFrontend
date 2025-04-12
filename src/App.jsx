import { useState } from 'react'
import './App.css'
import { Home, Trending, Subscriptions, Library } from "./Pages/index.js"
import MainLayout from './Layout/MainLayout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LibraryMain from './Components/OtherComponents/LibraryMain.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="trending" element={<Trending />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="library" element={<Library />} >
           
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
