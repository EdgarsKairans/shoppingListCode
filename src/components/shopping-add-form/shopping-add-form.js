import { Component } from 'react';

import './shopping-add-form.css';

class ShoppingAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 2 || !this.state.amount) return;
        this.props.onAdd(this.state.name, this.state.amount);
        this.setState({
            name: '',
            amount: ''
        })
    }

    render() {
        const {name, amount} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new product</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What product do you want?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Amount?"
                        name="amount"
                        value={amount} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default ShoppingAddForm;