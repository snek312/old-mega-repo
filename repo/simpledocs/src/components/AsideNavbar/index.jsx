import React from 'react';
import styled from 'styled-components';

import Projects from './Projects';
import Documents from './Documents';


import { PROJECTS_DATA } from '../../data/static_data'

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
    height: 100vh;
    width:15%;
    top: 46px;
    background: #F2F2F2;
    position: fixed;
    z-index: 2;
`

const Component = () => {
    return (
        <Wrapper>
            <Projects
                projects_data={PROJECTS_DATA}
            />
            <Documents
                projects_data={PROJECTS_DATA}
            />
        </Wrapper>
    )
}

export default Component;