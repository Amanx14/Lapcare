import React from 'react';

const Card = (props) => {
    const {listData} = props;
    const {title, seller, price, img} = listData;
  return (
    <div className="product-cards">
        <div className="image_box">
            <img src={img} alt=""/>
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{seller}</p>
            <p>Price - {price}Rs</p>
        </div>
        <button id='cart'>Add to Cart</button>
    </div>
  )
}

export default Card;