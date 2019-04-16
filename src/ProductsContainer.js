import React, { Component } from 'react'
import productsList from './products';
import RenderProduct from './RenderProduct';
import RenderCart from './RenderCart';
import InsertProductForm from './InsertProductForm';

class ProductsContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products: productsList,
         cart: [],
         isdisplayCart:false,
         showProductForm: false
      }
      
    }
   
    addtoCart = (product)=>{
        let cart = this.state.cart;
        const found = cart.some(el => el.name === product.name);
        if(found){
            alert("Already added to cart");
        }else{
            cart.push(product);
            this.setState({
                cart:cart
            }, ()=>{alert("Product Added to cart successfully")});
        }
    }
    removeCart = (product)=>{
        let cart = this.state.cart;
        const found = cart.some(el => el.name === product.name);
        if(found){
            cart.pop(product);
            this.setState({
                cart:cart
            }, ()=>{alert("Product Removed successfully")});
        }
    }
    displayCart = (val)=>{
        this.setState({
            isdisplayCart:val
        });
    }
    displayInsertProductForm = (val)=>{
        this.setState({
            showProductForm:val
        });
    }
    insertProduct = (product)=>{
        let products = this.state.products;
        const found = products.some(el => el.name === product.name);
        if(found){
            alert("Already exist");
        }else{
            products.push(product);
            this.setState({
                products:products,
                showProductForm:false
            }, ()=>{alert("Product Added successfully")});
        }
    }
  render() {
    let renderProductsData = (this.state.isdisplayCart)?
    <RenderCart cart={this.state.cart} removeCart={this.removeCart} displayCart={this.displayCart}/>:
    <div><RenderProduct productList = {this.state.products} cart = {this.state.cart} addtoCart = {this.addtoCart}/>
    <button className="go-to-cart-bt" disabled={!this.state.cart.length} onClick={()=>this.displayCart(true)}>Go To Cart</button>
    <button onClick={()=>this.displayInsertProductForm(true)}>Insert Product</button>
    </div>
    
    let pageData = (this.state.showProductForm)? <InsertProductForm insertProduct={this.insertProduct}/> : renderProductsData
    console.log(pageData);
    
    return (
       <div className="products-container">
        {pageData}
        </div>
    )
  }
}

export default ProductsContainer
