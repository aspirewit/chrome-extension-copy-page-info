import * as R from 'ramda'
import contextMenus from './contextMenus'

R.forEach(chrome.contextMenus.create, contextMenus)
