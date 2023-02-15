import './index.css'
import JS_IMAGE from './assets/JS.jpg'

const h1 = document.createElement('h1')
h1.textContent = 'I Love JavaScript'

const image = document.createElement('img')
image.src = JS_IMAGE

document.body.append(h1,image)