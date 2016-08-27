const html = require('choo/html')

const intro = `
  Hi, I'm yosh. This is my brain. It me. Welcome. I'm building stuff; probably
  building up to something too. I'm not sure what, but you're welcome to join.
  Explore. Enjoy. ✌️
`

const projects = [
  {
    name: 'dotfiles',
    description: 'OS X configuration files'
  },
  {
    name: 'infrastructure',
    description: 'Container infrastructure files'
  },
  {
    name: 'knowledge',
    description: 'Document everything'
  },
  {
    name: 'templates',
    description: 'Template files'
  },
  {
    name: 'writing',
    description: 'Macro blog'
  },
  {
    name: 'speaking',
    description: 'Meat blog'
  }
]

module.exports = mainView

function mainView (state, prev, send) {
  return html`
    <main class="ph3 ph5-ns pb5 black-70">
      <h1 class="f2 f1-ns fw6 mb2">
        yosh_land
        <span>/</span>
      </h1>
      <h2 class="f5 f4-ns measure lh-copy mt0">${intro}</h2>
      <section class="flex flex-row flex-wrap">
        ${projects.map(ghLink)}
      </section>
    </main>
  `
}

function ghLink (obj) {
  const name = obj.name
  const desc = obj.description
  return html`
    <article class="pv2 w-100 w-50-l pr0 pr2-l">
      <a href="https://github.com/yoshuawuyts/${name}">
        <h3 class="dib underline f4 f2-ns fw6 mb2">${name}</h3>
      </a>
      <p class="f5 f4-ns measure lh-copy mt0">${desc}</p>
    </article>
  `
}
