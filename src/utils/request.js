/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';

const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
});

export default request;
