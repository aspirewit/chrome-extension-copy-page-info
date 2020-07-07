import * as R from 'ramda'
import { createPageTransformation } from '../listenerFactory'

export default {
  title: 'Copy page url',
  contexts: ['page'],
  onclick: createPageTransformation(R.prop('url')),
}
