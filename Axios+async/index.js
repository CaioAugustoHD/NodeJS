const axios = require('axios');

// Sem Async/Await

axios
    .get('https://api.github.com/users/CaioAugustoHD')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(err => console.log(err))

// Com Async/Await

async function fetchRepos(){

    try {
        const user = await axios.get('https://api.github.com/users/CaioAugustoHD');
        const repos = await axios.get(user.data.repos_url);
        console.log(repos);
    } catch(err) {
        console.log(err);
    }
}

fetchRepos();