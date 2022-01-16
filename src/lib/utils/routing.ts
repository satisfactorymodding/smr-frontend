import type { Load } from '@sveltejs/kit';

export const paramsToProps = (callback?: Load): Load => {
  return async (input) => {
    if (callback) {
      const response = await callback(input);
      return {
        ...(response || {}),
        props: {
          ...(input.params || {}),
          ...(response ? response?.props || {} : {})
        }
      } as unknown;
    }

    return {
      props: {
        ...(input.params || {})
      }
    };
  };
};
