import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items:center;
    margin: 0 30px;
    width: 10%;
    font-size: 1.2em;
    color: #FFF;
`

class ComponentExport extends Component {
    render() {
        return (
            <Wrapper>Simple Docs</Wrapper>
        )
    }
}

export default ComponentExport;