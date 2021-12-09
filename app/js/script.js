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
    item.classList.toggle('has-fade');
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
// Cargar grilla
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

//usage:
readTextFile("/Desktop/test-frontend/app/json", function (text) {
  var data = JSON.parse(text);
  console.log(data);
});


let verMas = document.querySelector('#verMas');
let arr2 = []

verMas.addEventListener('click', () => {
  fetch('./app/json/products.json')
    .then(response => response.json())
    .then(data => data.products.map(element => {
      arr2.push(element)
      let items = document.querySelectorAll('.product__item')
      for (let x = 0; x < items.length; x++) {
        for (let i = 0; i < arr2.length; i++) {
          items[i].firstElementChild.firstElementChild.src = arr2[i].imageSrc;
          items[i].childNodes[3].childNodes[1].innerHTML = arr2[i].name;
          items[i].childNodes[3].childNodes[3].firstElementChild.innerHTML = "$ "
          items[i].childNodes[3].childNodes[3].childNodes[0].innerText = "$ " + arr2[i].bestPrice;
          items[i].childNodes[3].childNodes[5].childNodes[1].innerText = arr2[i].fees + " cuotas";
        }
      }

    }))
})
