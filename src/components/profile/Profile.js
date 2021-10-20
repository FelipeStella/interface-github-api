import React from 'react';
import { useGithub } from '../../hooks';
import * as Styles from './styles';

export const Profile = () => {

    const { githubState } = useGithub();

    return (
        <Styles.Wrapper>
            <Styles.WrapperImage
                src={githubState.user.avatar_url}
                alt="avatar"
            />
            
            <Styles.WrapperContentInfo>
                <h1>{githubState.user.name}</h1>
                    <div>
                        <h3>Username: </h3>
                        <a 
                        href={githubState.user.html_url} 
                        target="_blank"
                        rel="noreferrer"
                        >{githubState.user.login}</a>
                    </div>
                    
                    <div>
                        <h3>Company: </h3>
                        <span>{githubState.user.company}</span>
                    </div>
                    
                    <div>
                        <h3>Location: </h3>
                        <span>{githubState.user.location}</span>
                    </div>                         
                <Styles.WrapperStatus>
                    <div>
                        <h3>Followers</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h3>Repos</h3>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </Styles.WrapperStatus> 
            </Styles.WrapperContentInfo>             
        </Styles.Wrapper>
    )
}