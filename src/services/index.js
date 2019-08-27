import request from '../utils/request';

export async function fetchIndexData() {
  return await request.get('/');
}
