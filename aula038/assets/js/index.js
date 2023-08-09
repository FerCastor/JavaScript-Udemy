const paragrafos = document.querySelector('.divParagrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); 
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.padding = '5px 10px';
    p.style.borderRadius = '5px';
    p.style.color = 'white';
    p.style.fontWeight = 'lighter';
}