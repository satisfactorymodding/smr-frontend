import type { ZodArray, ZodObject, ZodRawShape, ZodTypeAny } from 'zod';
import { ZodOptional } from 'zod';

export const trimNonSchema = <T, K extends T>(data: K, schema: ZodObject<ZodRawShape>): T =>
  Object.fromEntries(
    Object.entries(data)
      .map(([key, value]) => {
        if (Object.keys(schema.shape).indexOf(key) >= 0) {
          if (value !== undefined && value !== null && typeof value === 'object') {
            let objSchema = schema.shape[key];
            if (objSchema instanceof ZodOptional) {
              objSchema = (objSchema as ZodOptional<ZodTypeAny>).unwrap();
            }

            if (Array.isArray(value)) {
              const arrayType = (objSchema as ZodArray<ZodTypeAny>).element;
              for (let i = 0; i < value.length; i++) {
                if (typeof value[i] === 'object') {
                  value[i] = trimNonSchema(value[i], arrayType as ZodObject<ZodRawShape>);
                }
              }
            } else if (value.constructor.name !== 'File') {
              value = trimNonSchema(value, objSchema as ZodObject<ZodRawShape>);
            }
          }

          return [key, value];
        }

        return undefined;
      })
      .filter((val) => !!val)
  ) as T;
