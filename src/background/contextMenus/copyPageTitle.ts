import * as R from 'ramda'
import { createPageTransformation } from '../listenerFactory'

export default {
  title: 'Copy page title',
  contexts: ['page'],
  onclick: createPageTransformation(R.prop('title')),
}
