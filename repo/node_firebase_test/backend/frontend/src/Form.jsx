import React, { Component } from 'react';

class MyForm extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state
        }
        console.log("post data: " + JSON.stringify(data));
        fetch('http://localhost:5000/api', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='wpisz name' name='name' onChange={this.handleChange} />
                <input type='text' placeholder='wpisz drugie name' name='drugieName' onChange={this.handleChange} />

                <button type="submit">wdawd</button>
            </form>
        );
    }
}

export default MyForm;