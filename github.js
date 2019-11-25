class GitHub{
    constructor(){
        this.client_id='b453d2cc66e05d999f44';
        this.client_secret = '8672311376df3a4fcbaf0668bad988d42e81868e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'nikitarudnev21';
    }

    //get a user info

    async getUserData(){
        //`` - backticks
        let urlProfile= `https://api.github.com/users/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos= `https://api.github.com/users/${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos)

        const profile = await profileResponse.json();
        const repos =  await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}