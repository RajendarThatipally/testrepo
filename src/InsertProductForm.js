import React, { Component } from 'react'

export class InsertProductForm extends Component {
   
    constructor(props) {
      super(props)
      this.state = {
         name:"",
         price:"",
         imageURL:""
      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, ()=>{console.log(this.state)});
    }
    handleSubmit = (event)=>{
       
        event.preventDefault();
        this.props.insertProduct(this.state);

    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Product Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <label>Product Price: </label>
          <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
          <label>Product Image: </label>
          <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange}/>
          <input type="submit" value="Insert Product"/>
      </form>
     )
  }
}

export default InsertProductForm
