// const tplHelloSource = document.querySelector('#template-hello').innerHTML;
// const tplHello = Handlebars.compile(tplHelloSource);
// const dataHello = {firstName: 'John', lastName: 'Smith'};
// let generatedHTML = tplHello(dataHello);
// const targetElement = document.body;
// targetElement.insertAdjacentHTML('beforeend', generatedHTML);
// console.log('tplHello:');
// console.log(tplHelloSource);
// console.log('=========');
// console.log('dataHello:');
// console.log(dataHello);
// console.log('=========');
// console.log('generatedHTML:');
// console.log(generatedHTML);
// console.log('=========');


const tplProductListSource = document.querySelector('#template-product-list').innerHTML;
const tplProductList = Handlebars.compile(tplProductListSource);
const productListData = {
 title: 'Great offers!',
 products: {
 'product-football': {
 name: 'Football',
 price: '$10'
 },
 'product-volleyball': {
 name: 'Volleyball',
 price: '$8'
 },
 'product-basketball': {
 name: 'Basketball',
 price: '$12'
 }
 }
};
let generatedHTML = tplProductList(productListData);
const targetElement = document.body;
targetElement.insertAdjacentHTML('beforeend', generatedHTML);