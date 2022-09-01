import type { ZodArray, ZodObject, ZodRawShape, ZodTypeAny } from 'zod';
import { ZodOptional } from 'zod';

export const trimNonSchema = <T, K extends T>(data: K, schema: ZodObject<ZodRawShape>): T =>
  Object.fromEntries(
    Object.entries(data)
      .map((o) => {
        if (Object.keys(schema.shape).indexOf(o[0]) >= 0) {
          let value = o[1];
          if (typeof value === 'object') {
            let objSchema = schema.shape[o[0]];
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

          return [o[0], value];
        }

        return undefined;
      })
      .filter((val) => !!val)
  ) as T;
