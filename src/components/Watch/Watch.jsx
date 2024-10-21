import PropTypes from 'prop-types';
import './Watch.css'
const Watch = ({watch, handleAddToCart}) => {
    const {name, price, img} = watch;
    return (
        <div className='watch'>
            <h3>Watch Name: {name}</h3>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleAddToCart(watch)}>Purchase</button>
        </div>
    );
};

Watch.propTypes={
    watch: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
 };


export default Watch;