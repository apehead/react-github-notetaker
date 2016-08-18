import axios from 'axios';

export function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

export function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export function getGithubInfo(username) {
  return axios.all([getRepos(username), getUserInfo(username)])
    .then(([resRepos, resBio]) => ({ repos: resRepos.data, bio: resBio.data }));
}

export default {
  getRepos,
  getUserInfo,
  getGithubInfo
};
