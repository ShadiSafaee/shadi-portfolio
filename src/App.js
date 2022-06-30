import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Layout from './components/Layout/Layout'
import MoreInfo from './components/MoreInfo/MoreInfo'
import Products from './components/Products/Products.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moreinfo" element={<MoreInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
