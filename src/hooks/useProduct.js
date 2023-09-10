import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'

export default function useProduct() {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    }).catch
  }, [])//dependencias:se ejecuta una sola vez

  const addFavorite = (product) => {
    const newFavorite = [...favorites]
    newFavorite.push(product)
    setFavorites(newFavorite)
  }
  const deleteFavorite = (product) => {
    const newFavorite = favorites.filter(e => e.id !== product.id)
    setFavorites(newFavorite)
  }
  return { products, favorites, addFavorite, deleteFavorite }
}
