import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization:`token ${GITHUB_TOKEN}` }
})

  //Get search result
 export const searchUsers= async (text) =>{
    const param = new URLSearchParams({
        q: text
    })
    
    const response = await github.get(`/search/users?${param}`)
    return response.data.items
}

//Get user and repos
export const getUserAndRepos = async(login) =>{
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data }
}