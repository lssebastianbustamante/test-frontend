// Collapse
let coll = document.querySelectorAll(".collapsible");

coll.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
    let content = element.nextElementSibling;
    return content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
  });
});

// Login Button
let ingresar = document.querySelector('#login')
let itemGrid = document.querySelectorAll('.product__item')

ingresar.addEventListener('click', () => {
  itemGrid.forEach(item => {
    item.classList.toggle('has-fade')
  });
});

// Color Categoria
let winter = document.querySelector('#winter');

winter.addEventListener('mouseover', () => {
  document.querySelector('h1').classList.toggle('colorOvermouse')
});



// Menu mobile
let sort = document.querySelector('#sort-button')
let closeSort = document.querySelector('#closebtn')

sort.addEventListener('click', () => {
  document.querySelector('#myNav').style.width = '100%';
})

closeSort.addEventListener('click', () => {
  document.querySelector('#myNav').style.width = '0%'
})


let coll3 = document.querySelectorAll('div.color');

for (let i = 0; i < coll3.length; i++) {
  coll3[i].addEventListener('click', () => {
    element.classList.toggle('active');
  })
}

let verMas = document.querySelector('#verMas');
let arr = []
let arr2 = []
verMas.addEventListener('click', () => {
  fetch('../../public/json/products.json')
  .then(response => response.json())
  .then(data => data.products.map( element => arr2.push(element.imageSrc)))

  let images = document.querySelectorAll('.theImage')
  for (let x = 0; x < images.length; x++) {
      images[x].src= arr2[0]
  }

  
})