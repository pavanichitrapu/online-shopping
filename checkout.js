$(document).ready(function() {

    function checkoutCard(e) {
        // <div class="cart-card">
        //     <div>
        //         <img class="product-img" src="/assets/default-product.png" />
        //     </div>
        //     <div>
        //         <h4>Product Title</h4>
        //         <p>x3</p>
        //         <p>Amount: Rs <span>30000</span></p>
        //     </div>
        // </div>

        var cardDiv = document.createElement('div');
        cardDiv.classList.add('cart-card');

        var imgDiv = document.createElement('div');
        var img = document.createElement('img');
        img.classList.add('product-img');
        img.src = e.preview;
        imgDiv.appendChild(img);

        var productData = document.createElement('div');
        var pName = document.createElement('h4');
        pName.innerHTML = e.name;
        var cartCount = document.createElement('p');
        cartCount.innerHTML = 'x'+e.count;
        var amt = document.createElement('span');
        amt.innerHTML = 'Amount: Rs ';
        var amtText = document.createElement('span');
        amtText.innerHTML = parseInt(e.count) * parseInt(e.price);
        var prodAmt = document.createElement('p');
        prodAmt.appendChild(amt);
        prodAmt.appendChild(amtText);
        productData.appendChild(pName);
        productData.appendChild(cartCount);
        productData.appendChild(prodAmt);

        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(productData);

        return cardDiv;
    }

    var cartList = window.localStorage.getItem('cartList');
    cartList = cartList === null || cartList === '' ? [] : cartList;
    cartList = cartList.length > 0 ? JSON.parse(cartList) : [];

    
    var finalAmt = 0;
    for(var i=0; i<cartList.length; i++) {
      

        var productList=document.getElementById('product-list');
        productList.append(checkoutCard(cartList[i]));
        var amtForEach = parseFloat(cartList[i].count) * parseFloat(cartList[i].price);

        finalAmt = finalAmt + amtForEach;
    }
 document.getElementById('prod-count').innerHTML=cartList.length;
 console.log(cartList.length);
  document.getElementById('total').innerHTML=finalAmt;  
  console.log(finalAmt);
    var btn=document.getElementById('btn');
   btn.addEventListener('click',function(){
        var orderArr = [];
        for(var i=0; i<cartList.length; i++) {
            var obj = {
                "id": cartList[i].id,
                "brand": cartList[i].brand,
                "name": cartList[i].name,
                "price": cartList[i].price,
                "preview": cartList[i].preview,
                "isAccessory": cartList[i].isAccessory
            }

            orderArr.push(obj);
        }
        alert('Order Placed Successfully');
        localStorage.setItem('cartList', []);
        location.assign('./confirm.html');
      
    })
})