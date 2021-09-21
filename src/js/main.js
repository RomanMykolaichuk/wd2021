import 'boxicons/css/boxicons.min.css'
import '../scss/style.scss'
import './goods'

let totalPrice = 0;
let totalItems = 0;
const cart = [];


const cartInfo = document.getElementById("cart-info")

function setCartInfo(ti, tp) {
    var item = "items";
    if (ti === 0) { cartInfo.innerHTML = ""; }
    else {
        if (ti === 1) { item = "item" };
        cartInfo.innerHTML = `total ${ti} ${item} (${tp} UAH)`;
    }
}

setCartInfo(4, 200);


let goods;
const goodsList = document.getElementById('list-goods');



function showGoods() {
    goods = JSON.parse(sessionStorage.getItem('listGoods'));
    var s = "";

    for (let good of goods) {
        s = s + `<div id="${good.id}" class="card"><h3>${good.title}</h3>    <img src="${good.img}" alt="img"><p>${good.price}</p>   <button class="add-button">Add to Cart</button></div>`;
    }
    goodsList.innerHTML=s;

    let buttons=Array.from(document.getElementsByClassName("add-button"));
    

    for(let button of buttons){
        button.addEventListener('click',addToCart);
    }
}

function addToCart(e){
    let newId = e.target.parentNode.id;
    cart.push({id:newId, quantity:1}); 
    console.log(cart);
}

showGoods();



{/* <div class="card">
    <h3>title</h3>
    <img src="./img/pxfuel1.jpg" alt="">
    <p>price</p>
    <button>Add to Cart</button>
</div> */}

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// Work with session storage
// console.log(JSON.parse(sessionStorage.getItem('sample')));

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }