const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleBurgerIcon);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleBurgerIcon() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileClosed = menuMobile.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  if(!isMobileClosed){
    menuMobile.classList.add('inactive');
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Celular',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
{/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */}

function renderProduct(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice,productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.append(productCard);
  }
}

renderProduct(productList);