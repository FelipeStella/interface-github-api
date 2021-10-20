import { GithubProvider } from './providers/githubProvider/GithubProvider';
import { ResetCSS } from './global/resetCSS';
import { App } from './pages';


const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS/>
                <App/>                
            </GithubProvider> 
        </main>
    )
}

export default Providers;