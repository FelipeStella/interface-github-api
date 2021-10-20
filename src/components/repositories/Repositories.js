import React, { useEffect, useState } from 'react';
import { useGithub } from '../../hooks/githubHooks/GithubHooks';
import { RepositoryItem } from '../repository-item/Repository-item';
import { NoSearch } from '../no-search/NoSearch';
import * as Styled from './styles';

export const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [ hasUserForSearchRepos, setHasUserForSearchRepos ] = useState(false);

    useEffect(() => {
      if (githubState.user.login) {
        getUserRepos(githubState.user.login);
        getUserStarred(githubState.user.login);
      }
      setHasUserForSearchRepos(githubState.repositories);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);
  
    return(
        <>
            {
                hasUserForSearchRepos ? 
                    ( <Styled.WrapperTabs
                        selectedTabClassName="is-selected"
                        selectedTabPanelClassName="is-selected"
                    >
                        <Styled.WrapperTabList>
                            <Styled.WrapperTab>Repositories</Styled.WrapperTab>
                            <Styled.WrapperTab>Starred</Styled.WrapperTab>
                        </Styled.WrapperTabList>
                        
                        <Styled.WrapperTabPanel>
                            <Styled.WrapperList>
                                {githubState.repositories.map((item) => (
                                    <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullname={item.full_name}
                                    />
                                ))} 
                            </Styled.WrapperList>                        
                        </Styled.WrapperTabPanel>

                        <Styled.WrapperTabPanel>
                            <Styled.WrapperList>
                                {githubState.starred.map((item) => (
                                    <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullname={item.full_name}
                                    />
                                ))}
                            </Styled.WrapperList> 
                        </Styled.WrapperTabPanel>

                    </Styled.WrapperTabs> )
                : (<NoSearch>This user has no public repositories</NoSearch>)
             }

        </>
    )

}
