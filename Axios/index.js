const axios = require('axios')

axios.get('https://api.github.com/users/CaioAugustoHD')
    .then(response => console.log(response))