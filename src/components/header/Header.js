import React, { useState } from 'react';
import { useGithub } from '../../hooks';
import * as Styled from './styled';

export const Header = ({ hasUser }) => {

    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <Styled.WrapperHeader>
                <input 
                type="text" placeholder="Enter the username..." 
                onChange={(event) => setUsernameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>Find</button>
            </Styled.WrapperHeader>
        </header>
    )
}