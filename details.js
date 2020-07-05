
var pid=location.href.split('p=')[1];

var addToCart=document.getElementById('add');

//Button animation 
addToCart.addEventListener('click',function(){
addToCart.style.setProperty('transform','scale(1.1)');
setTimeout(() => {
addToCart.style.setProperty('transform','scale(1)') 
}, 200);
});


var response;
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://5ef8b2a88e584a00163d9a5f.mockapi.io/product/"+ pid, "true");
xhttp.send();
xhttp.onreadystatechange = function () {
  if (xhttp.readyState === 4) {
       response = JSON.parse(xhttp.responseText);

      var productWrapper=document.getElementById('product-details-wrapper');
      var maindiv = document.createElement('div');
      maindiv.classList.add('product-div');
      var img = document.createElement('img');
      img.classList.add('card-img');
      img.src = response.preview;
      img.alt='preview-img';
      maindiv.appendChild(img);
      productWrapper.appendChild(maindiv);
      var product_desc_div=document.createElement('div');
      product_desc_div.classList.add('product-desc-div');
      var descname = document.createElement('div');
      descname.classList.add('pname')
      descname.innerText = response.name;
      product_desc_div.appendChild(descname);

      var bname = document.createElement('div')
      bname.classList.add('bname');
      bname.innerHTML =  response.brand;
      product_desc_div.appendChild(bname);

      var pric = document.createElement('p');
      pric.classList.add('price');
      pric.innerText ='Rs ' +  response.price;
      product_desc_div.appendChild(pric);

      var descHeading=document.createElement('p');
      descHeading.classList.add('heading');
      descHeading.innerText='Description';
       
      product_desc_div.appendChild(descHeading);

      var pdesc = document.createElement('div');
      pdesc.classList.add('pdesc');
      pdesc.innerHTML= response.description;
      product_desc_div.appendChild(pdesc);

      var previewHeading=document.createElement('p');
      previewHeading.classList.add('heading');
      previewHeading.innerText='Product Preview';
      product_desc_div.appendChild(previewHeading);

      var preview = document.createElement('div');
      preview.classList.add('preview');
     
      for(var i=0; i<response.photos.length; i++)
      {
          var res=previewProduct(response.photos[i]);
          preview.appendChild(res);
      }
       product_desc_div.appendChild(preview);
       productWrapper.appendChild(product_desc_div);
     }
  }

  function previewProduct(data){
    var img=document.createElement('img');
    img.src=data;
    img.classList.add('preview-img');
    img.addEventListener('click',function(){
      var previewImg=document.querySelector('.product-div > img');
      previewImg.src=data;
      var prevImgArr=document.getElementsByClassName('preview-img');
      for(var i=0;i<prevImgArr.length;i++)
      {
        prevImgArr[i].classList.remove('active');
      }
      img.classList.add('active');
    });
    return img;
  }

 addToCart.addEventListener('click',function(){
  if(localStorage.getItem('cartList') === null || localStorage.getItem('cartList') === ''){
    localStorage.setItem('cartList', JSON.stringify([]));
}

var cartList = JSON.parse(window.localStorage.getItem('cartList'));
var elem = -1;
var count=0;
for(i=0; i<cartList.length; i++){
    if(parseInt(cartList[i].id) == parseInt(response.id)){
        elem=i;
       // console.log(elem);
    }
}
if(elem>-1){
  cartList[elem].count = cartList[elem].count+1;
    console.log(cartList[elem].count);
    window.localStorage.setItem('cartList', JSON.stringify(cartList));
}else{
    response.count = 1;
    cartList.push(response);
    window.localStorage.setItem('cartList', JSON.stringify(cartList))
}
var totalcount = 0;
var cartCount=document.getElementById('cart-count');
for(i=0; i<cartList.length; i++){
totalcount = totalcount + cartList[i].count;
cartCount.innerHTML=totalcount;
}

//var cartCount=document.createElement('p');
//cartCount.classList.add('cart-count');
//cartCount.append(totalcount);
//$('#cart-count').html(totalcount);

});



  


