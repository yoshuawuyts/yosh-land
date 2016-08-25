const html = require('choo/html')
const css = require('sheetify')
const choo = require('choo')

css('tachyons')

const app = choo()
app.router((route) => [ route('/', mainView) ])

const tree = app.start()
document.body.appendChild(tree)

function mainView (state, prev, send) {
  const projects = [
    'dotfiles',
    'infrastructure',
    'knowledge',
    'templates',
    'writing',
    'speaking'
  ]
  return html`<main>
    <h1>yosh land</h1>
      <h2>Welcome to the yosh land</h2>
      ${ghLinks(projects)}
    </main>
  `
}

function ghLinks (names) {
  return names.map(ghLink)
}

function ghLink (name) {
  return html`
    <a href="https://github.com/yoshuawuyts/${name}">
      <h3>${name}</h3>
    </a>
  `
}
