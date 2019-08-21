import request from '@/utils/request';

export async function getData() {
  return request('/api/v1/some/api');
}
