import request from '../utils/request';
import Trending from 'GitHubTrending';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export async function fetchIndexData() {
  return await request.get('/');
}

export async function fetchPopularService({name = 'react'}) {
  return request(URL + name + QUERY_STR);
}
