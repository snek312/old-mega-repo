import React, { Component } from 'react'


export class Header extends Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                response.json()
                    .then(json => {
                        console.log("fetched data: " + json)
                        this.setState({ data: json });
                    })

                //TODO display downloaded data on page 

            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <h1>Witam na stronie</h1>
                <h2>Dane: </h2>
                <div>
                    {
                        this.state.data === Object ?
                            null :
                            this.state.data
                    }
                </div>
            </div>
        )
    }
}

export default Header
