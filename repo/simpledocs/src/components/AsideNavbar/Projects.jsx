import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.menu`
    /* padding-left: 30px; */
    margin: 30px 0;
    display: flex;
    flex-direction:column;
    align-content:center;
    overflow: auto;
    height: 35%;
    width: 85%;
    border-bottom: 1px solid #000;
`

class ComponentExport extends Component {


    render() {
        return (
            <Wrapper>
                <header>
                    <h3>Projects</h3>
                </header>
                {this.props.projects_data.map((item, index) => (
                    <a
                        key={`navbar-${index}`}
                        href={`/${item.route}`}
                    >{item.projectName}</a>
                ))}

            </Wrapper>
        )
    }
}

export default ComponentExport;