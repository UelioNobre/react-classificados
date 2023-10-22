import { createContext, useState } from 'react'

export const CartContext = createContext([]);

const itemHasExists = (items, product) => {
  return items.some((i) => i.id === product.id);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(item) {
    const hasExists = itemHasExists(cartItems, item);
    if (!hasExists) {
      item.quantity = 1;
      item.subtotal = item.preco;
      setCartItems([...cartItems, item]);
      return;
    } else {
      const updated = updateCartQuantity(item.id);
      setCartItems([...updated]);
    }
  }

  function updateCartQuantity(id) {
    return cartItems.map((cart) => {
      if (cart.id === id) {
        cart.quantity += 1;
      }
      return cart;
    });
  }

  function countCartItems() {
    return cartItems.length;
  }

  function removeCartItem({id}) {
    const removed = cartItems.filter(i => i.id !== id);
    setCartItems([...removed])
  }

  function increaseCartItem({id}) {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
        item.subtotal = parseFloat(item.quantity * item.preco)
      }
      return item;
    });

    setCartItems([...updated]);
  }

  function totalAmount() {
    return cartItems.reduce((acc, item) => acc += (item.quantity * item.preco), 0)
  }

  function decreaseCartItem({id, quantity}) {
    let updated = [];

    if (quantity === 1) {
      removeCartItem({id})
      return;
    }

    updated = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
        item.subtotal = parseFloat(item.quantity * item.preco)
      }
      return item;
    });

    setCartItems([...updated]);
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addCartItem,
      removeCartItem,
      countCartItems,
      increaseCartItem,
      decreaseCartItem,
      totalAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}
