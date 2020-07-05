$(document).ready(function(){
  
  $('.banner').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});

var productWrapper=document.getElementById('clothes');
var accessories = document.getElementById('accessories');
function createProductCard(e){
  var mainCardDiv=document.createElement('div');
  mainCardDiv.classList.add('main-card-container');

  var productLink=document.createElement('a');
  productLink.href='./details.html?p='+e.id;

  var productImg = document.createElement('img');
  productImg.classList.add('card-img');
  productImg.src = e.preview;
  productImg.alt = e.name + ' Pic';

  productLink.appendChild(productImg);

  var cardTextDiv = document.createElement('div');
  cardTextDiv.classList.add('card-text-container');

  var pName = document.createElement('p');
  pName.classList.add('product-name');
  pName.innerText=e.name;
 
  var pBrand = document.createElement('p');
  pBrand.classList.add('brand-name');
  pBrand.innerText=e.brand;
 
  var pPrice = document.createElement('p');
  pPrice.classList.add('price-info');
  pPrice.innerText='Rs' + e.price;
  
  cardTextDiv.appendChild(pName);
  cardTextDiv.appendChild(pBrand);
  cardTextDiv.appendChild(pPrice);

  var productGrid=document.createElement('div');
  productGrid.classList.add('product-grid');

  mainCardDiv.appendChild(productLink);
  mainCardDiv.appendChild(cardTextDiv);
  
  return mainCardDiv;
 
}
/* Back end*/
var xhttp=new XMLHttpRequest();
xhttp.open("GET","https://5ef8b2a88e584a00163d9a5f.mockapi.io/product",true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if(xhttp.readyState ===4){
        var response=JSON.parse(xhttp.responseText);
              for(var i=0; i<response.length; i++) {
                if(response[i].isAccessory) {
                  accessories.appendChild(createProductCard(response[i]))
                } else {
                  clothes.appendChild(createProductCard(response[i]));
                }
              }
      }
};
});
