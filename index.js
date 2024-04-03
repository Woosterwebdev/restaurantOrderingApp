import { menuArray } from "./data.js";

let totalPrice = 0
let orderItemsArr = []


document.addEventListener('click', function(e) {
    // switch statement or if/else?
    
    if (e.target.dataset.add){
      handleAddItemClick(e.target.dataset.add)
    } else if (e.target.dataset.remove){
      handleRemoveItemClick(e.target.dataset.remove)
    } else if (e.target.dataset.complete){
      handleCompleteOrderClick()
    } else if (e.target.dataset.pay){
      handlePayClick()
    }
})

function getMenuItems() {
    let menuItems = ``
    menuArray.forEach(function(item) {
      let ingredients = item.ingredients.join(', ')
      menuItems +=`
        <div class="menu-item">
          <div class="item-details">
            <img class="item-img" src="${item.image}" />
              <div class="item-description">
                <h3 class="item-name">${item.name}</h3>
                <p class="ingredients">${ingredients}</p>
                <p class="price">$ ${item.price}</p>
              </div>
          </div>
          <img id="add-icon" data-add="${item.id}" src="images/add-icon.png" />
        </div>`
    })
    document.getElementById('menu').innerHTML = menuItems
}

getMenuItems()

function handleAddItemClick(addedItem) {
  orderItemsArr.push(Number(addedItem))  // Change to push whole obj instead of just id.
  renderOrderItems()
  renderTotal()
}

function renderOrderItems() {
  let yourOrder = ``
  orderItemsArr.forEach(function(item){
    const itemObj = menuArray.filter(function(menuItem){
      return menuItem.id === item
    })[0]    
    yourOrder += `
      <div class="order-item">
        <div class="item-remove">
          <p class="item-name m-5">${itemObj.name}</p>
          <button id="remove-btn" class="remove-btn" data-remove="${itemObj.id}">remove</button>
        </div>
        <p class="price m-5">$ ${itemObj.price}</p>
      </div>
    `
    })
  document.getElementById('your-order').classList.remove('hidden')
  document.getElementById('your-order').innerHTML = yourOrder 
}

function renderTotal(){
  document.getElementById('your-total').innerHTML = `
    <div class="order-total m-0">
      <p class="total m-5">Total:</p>
      <p class="price m-5">$ ${totalPrice}</p>
    </div>
    <div>
      <button id="complete-order" class="complete-order btn">
      Complete Order
      </button>
    </div>
    `
}

// function handleRemoveItemClick() {

// }

// function totalOrder() {

// }

// function handleCompleteOrderClick() {

// }

// function handlePayClick() {

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
            <button id="remove-btn" class="remove-btn" data-remove="${item.id}">remove</button>
          </div>
          <p class="price m-5">$ PRICE</p>
        </div>

your total        
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