/* eslint-disable @typescript-eslint/no-unused-vars */
// Similiar structure to:
// https://github.com/JS-DevTools/rehype-inline-svg/blob/master/src/inline-svg.ts
import path from 'path';
import { Processor } from 'unified';
import { Node } from 'unist';
import visit from 'unist-util-visit';
import { VFile } from 'vfile';

/**
 * An `<img>` HAST node
 */
interface ImageNode extends Node {
  type: 'element';
  tagName: 'img';
  properties: {
    src: string;
  };
}

/**
 * Determines whether the given HAST node is an `<img>` element.
 */
function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode;
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  );
}

/**
 * Filters out non absolute paths from the public folder.
 */
function filterImageNode(node: ImageNode): boolean {
  return node.properties.src.startsWith('/');
}

/**
 * This is a Rehype plugin that finds image `<img>` elements and appends `pathToAdd` to image src if image src is absolute.
 * Read more about Next.js image: https://nextjs.org/docs/api-reference/next/image#layout
 */
export default function relativeToFolder({ pathToAdd }: { pathToAdd: string }) {
  return function (this: Processor) {
    return async function transformer(tree: Node, file: VFile): Promise<Node> {
      const imgNodes: ImageNode[] = [];

      visit(tree, 'element', (node) => {
        if (isImageNode(node) && filterImageNode(node)) {
          imgNodes.push(node);
        }
      });

      for (const node of imgNodes) {
        node.properties.src = path.join(pathToAdd, node.properties.src);
      }

      return tree;
    };
  };
}
