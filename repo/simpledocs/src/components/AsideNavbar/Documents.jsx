import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.menu`
    /* padding-left: 30px; */
    display: flex;
    flex-direction:column;
    overflow: auto;
    width: 85%;


`

class ComponentExport extends Component {


    render() {
        return (
            <Wrapper>
                <header>
                    <h3>Documents</h3>
                </header>
                {/* {this.props.projects_data.map((item, index) => (
                    <a
                        key={`navbar-${index}`}
                        href={`/${item.route}`}
                    >{item.projectName}</a>
                ))} */}

            </Wrapper>
        )
    }
}

export default ComponentExport;