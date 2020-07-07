import * as R from 'ramda'
import * as copyToClipboard from 'copy-to-clipboard'

const getSelectedText = R.propOr('', 'selectionText')

export const createPageTransformation = fn => R.pipe(R.nthArg(1), fn, copyToClipboard)
