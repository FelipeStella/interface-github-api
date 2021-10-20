import React from 'react';
import { Header } from '../../components/header/Header';
import { NoSearch } from '../../components/no-search/NoSearch';
import { Profile } from '../../components/profile';
import { Repositories } from '../../components/repositories/Repositories';
import { useGithub } from '../../hooks';
import * as Styled from './styled';

export const App = () => {

  const { githubState } = useGithub();

  return (
    <Styled.WrapperMainPage>
      <Header/>
      {githubState.hasUser ? (<>

        {githubState.loading ? (<p>Loading...</p>) : (
          <>
            <Profile/>
            <Repositories/>  
          </>
        )} 

      </>) : (
        <NoSearch>No search user</NoSearch>
      )}
                   

    </Styled.WrapperMainPage>
  );
}






