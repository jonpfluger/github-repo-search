import axios from 'axios'

const API = {
  searchRepos(term) {
    return axios(`https://api.github.com/search/repositories?q=${term}`)
  },
  // more methods to come...
}

export default API