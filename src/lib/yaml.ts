import yaml from 'yaml';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

export async function getYaml<T>(filePath: string): Promise<T> {
  const file = await promisify(fs.readFile)(path.join(process.cwd(), filePath));

  const data = yaml.parse(file.toString());

  return data as T;
}
