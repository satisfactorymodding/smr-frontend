export type File = {
  name: string;
  size: number;
  type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
};
