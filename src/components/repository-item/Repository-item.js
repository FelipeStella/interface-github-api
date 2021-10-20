import React from 'react';
import * as Styled from './styled';

export const RepositoryItem = ({ name, linkToRepo, fullname }) => {

    return (
        <Styled.Wrapper>
            <h2>{name}</h2>
            <a href={linkToRepo} target="_blank" rel="noreferrer">{fullname}</a>
        </Styled.Wrapper>
   
    )
}