
// IMAGE CHANGE ON HOVER
let image = document.getElementById('image');
image.addEventListener('mouseover', ()=>{
  image.src = 'image.jpeg';
})
image.addEventListener('mouseout', ()=>{
  image.src = 'image1.jpeg';

});
