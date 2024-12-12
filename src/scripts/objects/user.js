const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    userName:'',
    repositories:[],
    setInfo (gitHubuser){
        this.avatarUrl = gitHubuser.avatar_url
        this.name = gitHubuser.name
        this.bio = gitHubuser.bio
        this.userName = gitHubuser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }