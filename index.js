import './index.css'

const h1 = document.createElement('h1')
h1.textContent = 'I Love JavaScript'

const image = document.createElement('img')
image.src = './assets/JS.jpg'

document.body.append(h1,image)