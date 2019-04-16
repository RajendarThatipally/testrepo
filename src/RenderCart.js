import React from 'react'

function RenderCart(props) {
    const {cart, removeCart, displayCart} = props
    console.log(cart);
    let cartProductsHTML = <h1>No Products Added to Cart</h1>;
    if(cart.length > 0){
        cartProductsHTML = cart.map((item)=>{
        return <div key="{item.name}">
            <img src={item.imageURL} alt="img"/><br/>
            <strong>{item.name}</strong><br/>
            <strong>Price: ${item.price}</strong>
            <button onClick={()=>removeCart(item)}>Remove</button>
        </div>
        })
    }
  return (
    <div className="product-list">
      {cartProductsHTML}
      <button className="go-to-product-bt" onClick={()=>displayCart(false)}>Go To Products </button> 
    </div>
  )
}

export default RenderCart
