const css = require('sheetify')
const choo = require('choo')

css('tachyons')

const app = choo()
app.router((route) => [ route('/', require('./pages/main')) ])

const tree = app.start()
document.body.appendChild(tree)
