import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch';
import Header from './components/Watch/Header';
import './components/Watch/Watch.css'
import { addToLs, getStoredCart, removeFromLs } from './utilities/localStorage';
import Cart from './components/Cart/cart';
function App() {
  const [watches, setWatches] = useState([]);
  const [cart, setCart]=useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))

  }, [])

  useEffect(() =>{
    // console.log(watches.length)
    if(watches.length){
      const storedCart = getStoredCart();
      console.log('dfjkhsd', storedCart);
      const savedCart = [];
      for(const id of storedCart){
        const watch = watches.find(watch => watch.id === id);
        if(watch){
          savedCart.push(watch);
        }
      }
      setCart(savedCart);
    }
  },[watches])

  const handleAddToCart = watch =>{
    console.log(watch)
    const newCart = [...cart, watch];
    setCart(newCart);
    addToLs(watch.id);
  }

  const handleRemoveFromCart = id =>{
    const remainingCart = cart.filter(watch => watch.id !== id);
    setCart(remainingCart);
    removeFromLs(id);
  }

  return (
    <>
      <Header></Header>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className='watch_container'>
        {
          watches.map(watch =>
            <Watch key={watch.id}
             watch={watch}
             handleAddToCart={handleAddToCart}
             ></Watch>
          )
        }
      </div>
    </>
  )
}

export default App
