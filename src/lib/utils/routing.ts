import type {Load} from '@sveltejs/kit';

export const paramsToProps = (callback?: Load): Load => {
  return async input => {
    if (callback) {
      const response = await callback(input);
      return {
        props: {
          ...(input.page.params || {}),
          ...response ? response?.props || {} : {}
        },
        ...response || {}
      };
    }

    return {
      props: {
        ...(input.page.params || {}),
      },
    };
  }
}
