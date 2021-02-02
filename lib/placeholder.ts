import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { getBase64 } from '@plaiceholder/base64';

export type ImgPlaceholder = string;

export async function generatePlaceholder(imgPath: string): Promise<ImgPlaceholder> {
  const image = await promisify(fs.readFile)(path.join(process.cwd(), 'public', imgPath));

  // optimize using data uri thing?
  const base64 = await getBase64(image);

  return base64;
}
