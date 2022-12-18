import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { getBase64 } from '@plaiceholder/base64';

export type ImgPlaceholder = { placeholder: 'blur'; blurDataURL: string };

export async function generatePlaceholder(imgPath: string): Promise<ImgPlaceholder> {
  const image = await promisify(fs.readFile)(path.join(process.cwd(), 'public', imgPath));

  const base64 = await getBase64(image);

  return { placeholder: 'blur', blurDataURL: base64 };
}

function arrayToObject<TValue>(list: [key: string, value: TValue][]): Record<string, TValue> {
  return list.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

export async function generatePlaceholders<
  TName extends string,
  TLocation extends string,
  TMap extends Record<TName, TLocation>,
>(placeholders: TMap): Promise<Record<TName, ImgPlaceholder>> {
  const items = await Promise.all(
    Object.entries(placeholders).map(
      async ([name, location]) =>
        [name, await generatePlaceholder(location as string)] as [string, ImgPlaceholder],
    ),
  );

  return arrayToObject(items) as Record<TName, ImgPlaceholder>;
}
