import * as React from 'react'
import { useCart } from '../context/CartContext'

const Boton = ({ item }) => {
  const { addItem } = useCart();
  const add = async (i) => addItem(i);
  return (
    <button className="btn-add-to-cart" onClick={() => add(item)}>Agregar al carrito</button>
  )
}

export default Boton