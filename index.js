import { menuArray } from "./data.js";

// document.addEventListener('click', function(e) {
//     // switch statement
// })


console.log(menuArray)

// function getMenuItems() {
//     let menuItems = ``

//     menuArray.forEach(function(item) {
//         menuItems +=`
//             <div class="menu-item">
//                 <div class="item-details">
//                 <img class="item-img" src="${item.image}" />
//                 <div class="item-description">
//                     <h3 class="item-name">${item.name}</h3>
//                     <p class="ingredients">${item.ingredients}</p>
//                     <p class="price">$ ${item.price}</p>
//                 </div>
//                 </div>
//                 <img id="add-icon" src="images/add-icon.png" />
//             </div>`
//     })
//     console.log(menuItems)
//     // document.getElementById('menu').innerHTML = menuItems
// }

// function handleAddItemClick() {

// }

// function handleRemoveItemClick() {

// }

// function totalOrder() {

// }

// function handleCompleteOrderClick() {

// }

// function handlePayClick() {

// }

// function renderOrderItems() {

// }

/* see www.emojiterra.com for more possible image options 
menu item
    <div class="menu-item">
        <div class="item-details">
          <img class="item-img" src="images/beer.png" />
          <div class="item-description">
            <h3 class="item-name">NAME</h3>
            <p class="ingredients">INGREDIENTS</p>
            <p class="price">$ PRICE</p>
          </div>
        </div>
        <img id="add-icon" src="IMAGE" />
    </div>

your order
      <h3 class="text-align">-Your Order-</h3>
        <div class="order-item">
          <div class="item-remove">
            <p class="item-name m-5">NAME</p>
            <button id="remove-btn" class="remove-btn">remove</button>
          </div>
          <p class="price m-5">$ PRICE</p>
        </div>
        
        <div class="order-total m-0">
          <p class="total m-5">Total:</p>
          <p class="price m-5">$26</p>
        </div>
        <div></div>
        <button id="complete-order" class="complete-order btn">
          Complete Order
        </button>

order complete

<h3 class="order-complete">
          Thanks, CUSTOMER-NAME! Your order is on it's way!
        </h3>
*/