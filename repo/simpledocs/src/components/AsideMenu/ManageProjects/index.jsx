import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.menu`
    
`
const Menu = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    padding: 50px;
    /* min-height: 300px; */
    background: #FFF;
    border: 1px solid #999;
    z-index: 10;
`

const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background: #000;
    opacity: .3;
    z-index: 5;
`

class ComponentToExport extends Component {
    constructor() {
        super()

        this.state = {
            displayMenu: false
        }

        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            // document.addEventListener('click', this.hideMenu)
        })
    }

    hideMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideMenu)
        })
    }

    render() {
        return (
            <Wrapper>
                <header>
                    <h2>Manage Project</h2>
                </header>
                <div>
                    <h4>Add new</h4>
                    <ul>
                        <button onClick={this.showMenu}>new project</button>
                        <button>new document</button>
                    </ul>
                </div>

                {this.state.displayMenu ? (
                    <>
                        <Menu>
                            <form action="/api" method="get">
                                <span>Project name</span>
                                <input name='test' type="text" />
                                <div>
                                    <button type="submit">create</button>
                                </div>
                            </form>
                            <button onClick={this.hideMenu}>cancel</button>
                        </Menu>
                        <Background onClick={this.hideMenu} />
                    </>
                ) :
                    (
                        null
                    )
                }
            </Wrapper>
        )
    }
}

export default ComponentToExport;