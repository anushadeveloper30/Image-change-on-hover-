// buttons => onclick , doubleclick
// input => onfocus , onblur , onchange 
// hover => onmouseover , onmousedown
// notworkable => onmouseup
//three types of buttonns => btn , submit , reset 
// tags of buttons => <button> , <input type="button"> , <input type="image">


// // COPY
// document.addEventListener('copy', (e) =>{
//     e.preventDefault();
//     swal.fire({
//         title:'No No plz do not copy my text',
//         text:'chori krna ghlt bt hai ',
//         icon:'warning'
//     })
// })


// // MOUSEOVER
// document.getElementById('para').addEventListener('mouseover', ()=>{
//     swal.fire({
//         title: 'Hey there!',
//         text: 'You hovered over the paragraph!',
//         icon: 'info'
//     })
// })


// // MOUSEMOVE
// document.getElementById('para').addEventListener('mousemove', ()=>{
//     swal.fire({
//         title: 'Hey there!',
//         text: 'You hovered over the paragraph!',
//         icon: 'info'
//     })
// })

// IMAGE CHANGE ON HOVER
let image = document.getElementById('image');
image.addEventListener('mouseover', ()=>{
  image.src = 'image.jpeg';
})
image.addEventListener('mouseout', ()=>{
  image.src = 'image1.jpeg';
});