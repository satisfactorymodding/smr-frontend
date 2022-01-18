import { LRUCache } from '../thirdparty/lru_cache';

export const imageCache = new LRUCache({
  max: 500,
  maxAge: 1000 * 60
});
