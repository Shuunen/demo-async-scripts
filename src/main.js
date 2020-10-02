function loadFile (filename) {
  const isScript = filename.includes('.js')
  let el
  if (isScript) {
    if (document.querySelector(`script[src="${filename}"]`)) return console.warn('cannot load', filename, 'twice')
    el = document.createElement('script');
    // el.onload = () => console.log(filename, 'loaded !')
    el.src = filename;
  } else {
    if (document.querySelector(`link[href="${filename}"]`)) return console.warn('cannot load', filename, 'twice')
    el = document.createElement("link")
    el.setAttribute("rel", "stylesheet")
    el.setAttribute("type", "text/css")
    el.setAttribute("href", filename)
  }
  document.head.appendChild(el);
}

async function getContent (filename) {
  const content = await fetch(filename).then(r => r.text())
  const el = document.createElement('div')
  el.innerHTML = content
  document.body.append(el)
}

function loadCharacter (name) {
  if (document.querySelector('.character--' + name)) return console.warn(name, 'character already loaded')
  console.log('loadCharacter', name)
  getContent(name + '.html').then(() => loadFile(name + '.js'))
}