import React from 'react'

function RenderProduct(props) {
    const {productList, addtoCart} = props
    
    
    let productsHTML = "No Products Found"
    if(productList.length){
        productsHTML = productList.map((product, index)=>{
            return <div key={index}>
                <div><img src={product.imageURL} alt="img"/></div>
                <strong>{product.name}</strong><br/>
                <strong>Price: ${product.price} </strong>
                <button onClick={()=>addtoCart(product)}>Add to Cart</button>
            </div>
        })
    }

    
    return (
    <div className="product-list">
        {productsHTML}
    </div>
  )
}

export default RenderProduct
