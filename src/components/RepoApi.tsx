import { useEffect, useState } from "react"
import { Counter } from "./Counter";

interface RepoData {
  watchers:number;
  full_name:string;
  description:string;
  stargazers_count: string;
  homepage:string;
}

export const RepoApi = () => {
 const [repos, setRepos] = useState<RepoData[]>([]);

 useEffect(()=> {
  async function fetchRepos() {

  const urls = [
    'https://api.github.com/repos/ionic-team/ionic-framework',
    // 'https://api.github.com/repos/techlove/techlove-frontend-codetest',
    'https://api.github.com/repos/facebook/react-native',
    'https://api.github.com/repos/reduxjs/redux-toolkit',
    'https://api.github.com/repos/WordPress/WordPress',
    'https://api.github.com/repos/facebook/react',
    'https://api.github.com/repos/laravel/laravel',
    'https://api.github.com/repos/expressjs/express'
  ]
 
  const requests = urls.map(url => fetch(url));
  const responses = await Promise.all(requests);

  const data = await Promise.all(
    responses.map(response => response.json() as Promise<RepoData>));
  
    setRepos(data);
    
}
    fetchRepos();

}, []); 
return (
  <div>
    <Counter 
    data={repos} 
    decreaseLabel="- Decrease" 
    increaseLabel="+ Increase" 
    counterTitle="Counter:" 
    nameTitle="Name:" 
    homepage="Homepage:" 
    watchers="Watchers:" 
    description="Description:" 
    stargazers="Stargazers:"/>
  </div>
)

}