import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating,tag}) {
  const [{basket}, dispatch] = useStateValue();

  console.log("thi is the basket>>",basket);


  const addToBasket=()=>{
    // dispatch the item into data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          tag,

      },
    });
  };


  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>{tag}</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>

                {/* <p>{rating}</p> */}
                {Array(rating).fill().map((_, i)=>(
                <p>🌟</p>
            ))}
            </div>
        </div>

        <img
        className='product__image'
         src={image}
         alt=''
         />

         <button className='product__btn' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product