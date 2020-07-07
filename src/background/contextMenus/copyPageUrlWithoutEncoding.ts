import { createPageTransformation } from '../listenerFactory'

export default {
  title: 'Copy page url without encoding',
  contexts: ['page'],
  onclick: createPageTransformation(({ url }) => decodeURI(url)),
}
