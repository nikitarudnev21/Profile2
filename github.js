class GitHub{
    constructor(){
        this.client_id='b453d2cc66e05d999f44';
        this.client_secret = '8672311376df3a4fcbaf0668bad988d42e81868e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'DanilaNesterko';
    }

    //get a user info

    async getUserData(){
        //`` - backticks
        let url= `https://api.github.com/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch();


    }
}