var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * (100));
 var newObject = { [item] : price };
 cart.push(newObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    } else {
      var cartString = `In your cart, you have `;
<<<<<<< HEAD
      let itemName = Object.keys(cart[0])[0];
      let itemPrice = cart[0][itemName]; 
        
      for (var i = 0; i < cart.length; i++) {
        itemName = Object.keys(cart[i])[0];
        itemPrice = cart[i][itemName]; 
=======
      let itemName = Object.keys(getCart()[0])[0];
      let itemPrice = getCart()[0][itemName]; 
        
      for (var i = 0; i < cart.length; i++) {
        itemName = Object.keys(getCart()[i])[0];
        itemPrice = getCart()[i][itemName]; 
>>>>>>> 68ac6fef9d7e60f43e03ad0be3cd3a1d2ce7a67f
        cartString = cartString + `${itemName} at $${itemPrice}`;

        if (i === (cart.length - 1)) {
          // i is 0 (last item), so put period
          cartString = cartString + ".";
<<<<<<< HEAD
        } // end of if i === len-1
=======
        } // end of if i === 0
>>>>>>> 68ac6fef9d7e60f43e03ad0be3cd3a1d2ce7a67f
        
        if (i === (cart.length - 2)) {
          if (cart.length > 2) {
          // need ", and "
          cartString = cartString + ", and ";
          } else {
          // just need " and "
          cartString = cartString + " and ";
          }
<<<<<<< HEAD
        } // end of if i === len-2
=======
        } // end of if i === 1
>>>>>>> 68ac6fef9d7e60f43e03ad0be3cd3a1d2ce7a67f

        if (i < (cart.length - 2)) {
          // more to come, so we need a comma
          cartString = cartString + ", ";
<<<<<<< HEAD
        } // end of if i < len-2
=======
        } // end of if i >= 2
>>>>>>> 68ac6fef9d7e60f43e03ad0be3cd3a1d2ce7a67f
      } // end for loop
      console.log(cartString);
    } // end of else (cart not empty)
}
  

function total() {
  var cartTotal = 0;
  var itemName = "";
  var itemPrice = 0;
  for (var i = 0; i < cart.length; i++) {
  itemName = Object.keys(cart[i])[0];
  itemPrice = cart[i][itemName]; 
  cartTotal = cartTotal + itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  // we only get here if the FOR finished and didn't find the item.
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return cart;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
}


/*
addToCart("bananas");
addToCart("pancakes");
addToCart("eggs");
addToCart("apples");

<<<<<<< HEAD
// Reference on .hasOwnProperty : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// cart[i] is like object1 and property1 is like bananas (as an example)
*/
=======


//verbose WORKING version

  function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    } else {
      cartString = `In your cart, you have `;
      let itemName = Object.keys(getCart()[0])[0];
      let itemPrice = getCart()[0][itemName]; 
        
      for (var i = 0; i < cart.length; i++) {
        console.log(`starting the for loop. i = ${i}. `)
        
        itemName = Object.keys(getCart()[i])[0];
        itemPrice = getCart()[i][itemName]; 
        
        console.log(`${itemName} at $${itemPrice}`);
        cartString = cartString + `${itemName} at $${itemPrice}`;

        if (i === (cart.length - 1)) {
          // i is 0 (last item), so put period
          console.log(".");
          cartString = cartString + ".";
        } // end of if i === 0
        
        if (i === (cart.length - 2)) {
          if (cart.length > 2) {
            // need ", and "
          console.log(",^and^");            
          cartString = cartString + ", and ";
          } else {
            // just need " and "
          console.log("^and^");
          cartString = cartString + " and ";
          }
        } // end of if i === 1

        if (i < (cart.length - 2)) {
          // more to come, so we need a comma
          console.log(",^");
          cartString = cartString + ", ";
        } // end of if i >= 2
      } // end for loop
      console.log("i'm done with for and should print the string.");
      console.log(cartString);
    }
  }
  



// verbose logging to figure out punctuation before figuring out how to access the objects.
function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    } else {
      var cartKeys = Object.keys(cart);
      var cartValues = Object.values(cart);
      cartString = `In your cart, you have `;
      for (var i = 0; i < cart.length; i++) {
        console.log(`starting the for loop. i = ${i}. `)
        console.log("item");
//        cartString = cartString + `${cartKeys[i]} at $` + cartValues[i];

        if (i === (cart.length - 1)) {
          // i is 0 (last item), so put period
          console.log(".");
//          cartString = cartString + ".";
        } // end of if i === 0 
        
        if (i === (cart.length - 2)) {
          if (cart.length > 2) {
            // need ", and " 
          console.log(",^and^");            
          } else {
            // just need " and "
          console.log("^and^");
//          cartString = cartString + " and ";
          }
        } // end of if i === 1 

        if (i < (cart.length - 2)) {
          // more to come, so we need a comma
          console.log(",^");
//          cartString = cartString + ",";
        } // end of if i >= 2 
      } // end for loop
      console.log("i'm done with for and should print the string.");
      // console.log(cartString);
    }
  }
  
*/

// Reference on .hasOwnProperty : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// cart[i] is like object1 and property1 is like bananas (as an example)


>>>>>>> 68ac6fef9d7e60f43e03ad0be3cd3a1d2ce7a67f
