// const button = document.querySelector('button')
// ///mouseover
// button.addEventListener('click', ()=> {
//   console.log('you are clikd me ! ')
// })

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    e.target.style.textDecoration = 'line-through';
    e.target.style.opacity = '0.8';
  });
});
