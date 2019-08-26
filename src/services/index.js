import Trending from 'GitHubTrending';
import {AsyncStorage} from 'react-native';

import request from '../utils/request';

export async function fetchIndexData() {
  return await request.get('/');
}
