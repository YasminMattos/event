//Siempre se llama al window para asegurarnos que cargue la página
window.addEventListener('load', function(){
  //cambia el texto y su color al posicionarme en él
  var title = document.getElementsByTagName('h1')[0];

  title.addEventListener('mouseover', function(){
    title.classList.add('textColor');
    title.textContent = 'I love fishes and sushi =>.<=';
  })
//al posicionarme en la imagen cambia

  var image = document.getElementsByTagName('img')[0];
  image.addEventListener('mouseover', function(){
    image.setAttribute('src', 'http://peces.mascotahogar.com/Imagenes/pez-del-paraiso.jpg');
  })
  image.addEventListener('mouseout', function(){
    image.setAttribute('src', 'assets/images/pez.jpg');
  })

  var box = document.querySelector('.square');
  box.addEventListener('mouseover', function(){
    box.setAttribute('width', '500px');

  })


    box.addEventListener('mouseout', function(){
      box.setAttribute('width', '300px');
})


})
