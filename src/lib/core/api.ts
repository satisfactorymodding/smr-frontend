import { PUBLIC_BACKEND_API_BASE } from '$env/static/public';

export const API_BASE = PUBLIC_BACKEND_API_BASE;
export const API_GRAPHQL = API_BASE + '/v2/query';
export const API_GRAPHQL_PLAYGROUND = API_BASE + '/v2';
export const API_REST = API_BASE + '/v1';
export const API_REST_DOCS = API_BASE + '/swagger/index.html';
