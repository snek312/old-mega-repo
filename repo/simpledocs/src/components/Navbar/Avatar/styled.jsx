import styled from 'styled-components';

const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 30px;
    width:30px;
    border-radius: 50%;
    background:#F6F9FF;
    color: #A0A8AD;
    font-weight: 600;
    margin: 0 13px;
    cursor: pointer;
    z-index: 9;
    :hover {
        ::before{
            content: '';
            position:absolute;
            top: -5;
            left: -5;
            height: 37px;
            width: 37px;
            background: #FFF;
            opacity: .3;
            border-radius: 50%;
        }
    }
`
const Wrapper = styled.div`
    display:flex;
    /* position: relative; */
    justify-content: space-between;
    align-items: center;
    color: #F6F9FF;

    a {
        color:inherit;
        text-decoration: none; 
        :hover {
            opacity: .8;
        }
    }
`

const Dropdown = styled.menu`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 46px;
    right: 20px;
    padding: 15px 20px;
    border: 2px solid #2C53A2;
    border-top: none;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    background: #fff;
    color: #000;
    z-index: 99;
`

export { Wrapper, Avatar, Dropdown }