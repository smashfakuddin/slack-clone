import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutLineIcon from '@material-ui/icons/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar onClick={()=>auth.signOut()} alt={user?.displayName} src={user?.photoURL} />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search Here' />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutLineIcon />
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;

`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    >.MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
}
`;


const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: .8;
    }
    
`;
const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    >.MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
}

`;