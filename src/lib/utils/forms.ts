import type { ZodObject, ZodRawShape } from 'zod';

export const trimNonSchema = <T, K extends T>(data: K, schema: ZodObject<ZodRawShape>): T => {
  return Object.fromEntries(Object.entries(data).filter((o) => Object.keys(schema.shape).indexOf(o[0]) >= 0)) as T;
};
