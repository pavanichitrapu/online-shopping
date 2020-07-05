$(document).ready(function() {
  var cartList = window.localStorage.getItem('cartList');
  cartList = cartList === null || cartList === '' ? [] : cartList;
  cartList = cartList.length > 0 ? JSON.parse(cartList) : [];
  var cartCount = 0;
  for (var i = 0; i < cartList.length; i++) {
    cartCount = cartCount + cartList[i].count;
  }
  document.getElementById('cart-count').innerHTML=cartCount;
 // $('#cart-count').html(totalCount);

 
 
 $('#accordian a').click(function() {
          var link = $(this);
          var closest_ul = link.closest("ul");
          var parallel_active_links = closest_ul.find(".active")
          var closest_li = link.closest("li");
          var link_status = closest_li.hasClass("active");
          var count = 0;
  
          closest_ul.find("ul").slideUp(function() {
              if (++count == closest_ul.find("ul").length)
                  parallel_active_links.removeClass("active");
          });
  
          if (!link_status) {
              closest_li.children("ul").slideDown();
              closest_li.addClass("active");
          }
      });
    })
/*var cartList = JSON.parse(window.localStorage.getItem('cartList'));
if (cartList == null) {
document.getElementById('cart-count').innerText=0;

} else {
  var cartCount = 0;
  for (var i = 0; i < cartList.length; i++) {
    cartCount += cartList[i].count;
  }
 document.getElementById('cart-count').innerHTML=cartCount;
// window.localStorage.setItem('cartList', []);
}  */

     



    
    
 
  
 