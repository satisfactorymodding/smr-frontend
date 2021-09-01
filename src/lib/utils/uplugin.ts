import { Validator } from '@cfworker/json-schema';
import { API_BASE } from '$lib/core';

let resolver;
const uPluginValidator = new Promise<Validator>((r) => (resolver = r));

fetch(API_BASE + '/static/uplugin-json-schema.json')
  .then((response) => response.json())
  .then((json) => resolver(new Validator(json)));

export const validateUPluginJson = async (input: string): Promise<string[]> => {
  const validator = await uPluginValidator;

  try {
    const objInput = JSON.parse(input);
    const result = validator.validate(objInput);

    if (result.valid) {
      return [];
    }

    return result.errors
      .map((error) => {
        if (error.keyword === '$ref') {
          return undefined;
        }

        let message = '`' + error.instanceLocation + '`';

        const value = resolveValue(objInput, error.instanceLocation);

        if (typeof value !== 'object') {
          message += ' **"' + value + '"**';
        }

        message += ': ' + error.error;

        return message;
      })
      .filter((v) => !!v);
  } catch (e) {
    return ['Invalid JSON'];
  }
};

const resolveValue = (object: unknown, path: string) => {
  const parser = new RegExp(`\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)`, `gm`);

  try {
    let value = object;
    let key = parser.exec(path);
    while (key !== null) {
      value = value[key[1] || key[2]];
      key = parser.exec(path);
    }
    return value;
  } catch (e) {
    // Ignore exception
  }

  return undefined;
};
