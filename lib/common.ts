import imageSize from 'image-size';
import { promisify } from 'util';
import path from 'path';

const sizeOf = promisify(imageSize);

export interface MdxImage {
  width: number;
  height: number;
  src: string;
}

/**
 * @param src The path to the image relative from `/public`
 * @returns image `src`, `width` and `height` or if no image it errors.
 */
export async function getMdxImage(src: string): Promise<MdxImage> {
  const res = await sizeOf(path.join(process.cwd(), 'public', src));
  if (!res) throw new Error(`Invalid image "${src}"`);

  return { src, width: res.width, height: res.height };
}

/**
 * Shallowly removes undefined values.
 * @param object Object to sanitize.
 */
export function sanitize<T extends Record<string, unknown>>(object: T): T {
  return Object.entries(object).reduce((obj, [key, value]) => {
    if (value) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      obj[key] = value;
    }
    return obj;
  }, {} as T);
}
