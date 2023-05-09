import type { Load } from '@sveltejs/kit';

export const paramsToProps =
  (callback?: Load): Load =>
  async (input) => {
    if (callback) {
      const response = await callback(input);
      const x = {
        ...(response || {}),
        props: {
          ...(input.params || {}),
          ...(response ? (await response?.props) || {} : {})
        }
      } as unknown;
      return x;
    }

    return {
      props: {
        ...(input.params || {})
      }
    };
  };
