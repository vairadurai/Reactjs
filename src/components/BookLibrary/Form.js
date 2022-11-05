import { Component } from 'react';
import './Form.css'


class Form extends Component {
    constructor() {

        super()

        this.state = {
            author: '',
            quantity: '',
            price: '',
        }
    }

    Handler = (event) => {
        this.setState(() => {
            return { [event.target.name]: event.target.value }
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
       console.log("Author:"+this.state.author,"quantity:",this.state.quantity,"price:",this.state.price);   
    }

    render() {

        return (
            <div className='container'>
                <div className='formContainer'>
                    <h1>Book Library</h1>
                    <form>
                        <div className='inputBox'>
                            <input type="text" value={this.state.author} name='author' onChange={this.Handler} />
                            <label>Author Name </label>
                        </div> <br></br>
                        <div className='inputBox'>
                            <input type="text" value={this.state.quantity} name='quantity' onChange={this.Handler} />
                            <label>Enter Quantity</label>
                        </div><br></br>
                        <div className='inputBox'>
                            <input type="text" value={this.state.price} name='price' onChange={this.Handler} />
                            <label>Enter Price</label>
                        </div><br></br>
                        <button onClick={this.submitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Form;