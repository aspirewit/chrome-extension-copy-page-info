import { createPageTransformation } from '../listenerFactory'

export default {
  title: 'Copy page url as markdown',
  contexts: ['page'],
  onclick: createPageTransformation(({ title, url }) => `[${title}](${url})`),
}
