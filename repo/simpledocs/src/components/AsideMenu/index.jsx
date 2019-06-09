import React from 'react';
import styled from 'styled-components';

import ManageProjects from './ManageProjects'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width:13%;
    right: 0px;
    top: 46px;
    background: #A0A8AD;
    position: fixed;
    z-index: 2;
`

const Component = () => {
    return (
        <Wrapper>
            <ManageProjects />
        </Wrapper>
    )
}

export default Component;