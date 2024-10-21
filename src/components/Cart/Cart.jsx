import './Cart.css'
import PropTypes from 'prop-types';
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
        <h4>Cart: {cart.length}</h4>
        <div className="cart_container">
            {cart.map(watch => (
                <div className="cart_item" key={watch.id}>
                    <img src={watch.img} alt={`Watch ${watch.id}`} />
                    <button onClick={() => handleRemoveFromCart(watch.id)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
    
    );
};

Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}
export default Cart;