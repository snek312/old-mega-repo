import React, { Component } from 'react';
import { Wrapper, Avatar, Dropdown } from './styled'

class ComponentExport extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        })
    }

    render() {
        return (
            <Wrapper>
                <a
                    href={`/setting&${this.props.user_id}`}
                >
                    {this.props.user_fullName}
                </a>
                <Avatar onClick={this.showDropdownMenu}>{this.props.user_initials}</Avatar>

                {this.state.displayMenu ? (
                    <Dropdown>
                        {this.props.navbar_menu.map((item, index) => (
                            <a
                                key={`navbar-${index}`}
                                href={item.route}
                            >{item.textContent}</a>
                        ))}
                    </Dropdown>
                ) :
                    (
                        null
                    )
                }
            </Wrapper>
        )
    }
}

export default ComponentExport;