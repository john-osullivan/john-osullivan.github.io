// @ts-nocheck
// This file came out of the box and I can't be bothered to type it for them

import {Tag} from '@markdoc/markdoc';

import {Heading} from '../../components';

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export const heading = {
  render: Heading,
  children: ['inline'],
  attributes: {
    id: {type: String},
    level: {type: Number, required: true, default: 1},
    className: {type: String},
  },
  transform(node:RenderableTreeNodes, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(this.render, {...attributes, id}, children);
  },
};
