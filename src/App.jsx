
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import useProduct from './hooks/useProduct'
import Detail from './components/Detail'



function App() {
  const { products, favorites, addFavorite, deleteFavorite } = useProduct()


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Products products={products} addFavorite={addFavorite} deleteFavorite={deleteFavorite}></Products>}></Route>
        <Route path='/favorites' element={<Products products={favorites} addFavorite={addFavorite} deleteFavorite={deleteFavorite}></Products>}></Route>
        <Route path='/product/:id' element={<Detail></Detail>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
