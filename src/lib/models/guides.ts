import * as zod from "zod";

export type GuideData = {
  name: string;
  short_description: string;
  guide: string;
}

export const guideSchema = zod.object({
  name: zod.string().min(3).max(32),
  short_description: zod.string().min(16).max(128),
  guide: zod.string()
});
