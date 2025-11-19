import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const addItem = (book) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === book.id);
      if (existing) {
        return prev.map((i) => (i.id === book.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...book, qty: 1 }];
    });
    setOpen(true);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);
  const toggle = () => setOpen((v) => !v);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  const value = useMemo(
    () => ({ open, items, addItem, removeItem, clear, toggle, openCart, closeCart }),
    [open, items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
