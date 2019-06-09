import React from 'react';
import styled from 'styled-components';

import { NAVBAR_MENU, USER_DATA } from '../../data/static_data'

import Avatar from './Avatar'
import Logo from './Logo.jsx'


const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 46px;
    width:100%;
    background: #2C53A2;
    position: fixed;
    z-index:10;
`

const USER_FULLNAME = () => {
    return `${USER_DATA.name} ${USER_DATA.surname}`
}

const USER_INITIALS = () => {
    return `${USER_DATA.name[0]}${USER_DATA.surname[0]}`
}

const Component = () => {
    return (
        <Wrapper>
            <Logo />
            <Avatar
                navbar_menu={NAVBAR_MENU}
                user_fullName={USER_FULLNAME()}
                user_initials={USER_INITIALS()}
            />
        </Wrapper>
    )
}

export default Component;